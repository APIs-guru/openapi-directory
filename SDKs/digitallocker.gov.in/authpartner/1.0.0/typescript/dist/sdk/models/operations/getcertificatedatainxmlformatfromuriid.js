var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetCertificateDataInXmlFormatFromUriIdPathParams = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriIdPathParams, _super);
    function GetCertificateDataInXmlFormatFromUriIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=uri" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriIdPathParams.prototype, "uri", void 0);
    return GetCertificateDataInXmlFormatFromUriIdPathParams;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriIdPathParams };
var GetCertificateDataInXmlFormatFromUriIdSecurity = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriIdSecurity, _super);
    function GetCertificateDataInXmlFormatFromUriIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetCertificateDataInXmlFormatFromUriIdSecurity.prototype, "bearerAuth", void 0);
    return GetCertificateDataInXmlFormatFromUriIdSecurity;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriIdSecurity };
var GetCertificateDataInXmlFormatFromUriIdRequest = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriIdRequest, _super);
    function GetCertificateDataInXmlFormatFromUriIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCertificateDataInXmlFormatFromUriIdPathParams)
    ], GetCertificateDataInXmlFormatFromUriIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCertificateDataInXmlFormatFromUriIdSecurity)
    ], GetCertificateDataInXmlFormatFromUriIdRequest.prototype, "security", void 0);
    return GetCertificateDataInXmlFormatFromUriIdRequest;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriIdRequest };
var GetCertificateDataInXmlFormatFromUriId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriId400ApplicationJson, _super);
    function GetCertificateDataInXmlFormatFromUriId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetCertificateDataInXmlFormatFromUriId400ApplicationJson;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriId400ApplicationJson };
var GetCertificateDataInXmlFormatFromUriId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriId401ApplicationJson, _super);
    function GetCertificateDataInXmlFormatFromUriId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetCertificateDataInXmlFormatFromUriId401ApplicationJson;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriId401ApplicationJson };
var GetCertificateDataInXmlFormatFromUriId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriId404ApplicationJson, _super);
    function GetCertificateDataInXmlFormatFromUriId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriId404ApplicationJson.prototype, "errorDescription", void 0);
    return GetCertificateDataInXmlFormatFromUriId404ApplicationJson;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriId404ApplicationJson };
var GetCertificateDataInXmlFormatFromUriIdResponse = /** @class */ (function (_super) {
    __extends(GetCertificateDataInXmlFormatFromUriIdResponse, _super);
    function GetCertificateDataInXmlFormatFromUriIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCertificateDataInXmlFormatFromUriId400ApplicationJson)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "getCertificateDataInXmlFormatFromUriId400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCertificateDataInXmlFormatFromUriId401ApplicationJson)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "getCertificateDataInXmlFormatFromUriId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCertificateDataInXmlFormatFromUriId404ApplicationJson)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "getCertificateDataInXmlFormatFromUriId404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "getCertificateDataInXmlFormatFromUriId500ApplicationJsonOneOf", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "getCertificateDataInXmlFormatFromUriId503ApplicationJsonOneOf", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCertificateDataInXmlFormatFromUriIdResponse.prototype, "statusCode", void 0);
    return GetCertificateDataInXmlFormatFromUriIdResponse;
}(SpeakeasyBase));
export { GetCertificateDataInXmlFormatFromUriIdResponse };
