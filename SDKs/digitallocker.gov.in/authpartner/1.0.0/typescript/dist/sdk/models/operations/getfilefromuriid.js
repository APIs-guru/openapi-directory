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
var GetFileFromUriIdPathParams = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdPathParams, _super);
    function GetFileFromUriIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=uri" }),
        __metadata("design:type", String)
    ], GetFileFromUriIdPathParams.prototype, "uri", void 0);
    return GetFileFromUriIdPathParams;
}(SpeakeasyBase));
export { GetFileFromUriIdPathParams };
var GetFileFromUriIdSecurity = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdSecurity, _super);
    function GetFileFromUriIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetFileFromUriIdSecurity.prototype, "bearerAuth", void 0);
    return GetFileFromUriIdSecurity;
}(SpeakeasyBase));
export { GetFileFromUriIdSecurity };
var GetFileFromUriIdRequest = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdRequest, _super);
    function GetFileFromUriIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileFromUriIdPathParams)
    ], GetFileFromUriIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileFromUriIdSecurity)
    ], GetFileFromUriIdRequest.prototype, "security", void 0);
    return GetFileFromUriIdRequest;
}(SpeakeasyBase));
export { GetFileFromUriIdRequest };
var GetFileFromUriId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFileFromUriId400ApplicationJson, _super);
    function GetFileFromUriId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetFileFromUriId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetFileFromUriId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetFileFromUriId400ApplicationJson;
}(SpeakeasyBase));
export { GetFileFromUriId400ApplicationJson };
var GetFileFromUriId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFileFromUriId401ApplicationJson, _super);
    function GetFileFromUriId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetFileFromUriId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetFileFromUriId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetFileFromUriId401ApplicationJson;
}(SpeakeasyBase));
export { GetFileFromUriId401ApplicationJson };
var GetFileFromUriId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFileFromUriId404ApplicationJson, _super);
    function GetFileFromUriId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetFileFromUriId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        Metadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetFileFromUriId404ApplicationJson.prototype, "errorDescription", void 0);
    return GetFileFromUriId404ApplicationJson;
}(SpeakeasyBase));
export { GetFileFromUriId404ApplicationJson };
var GetFileFromUriIdResponse = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdResponse, _super);
    function GetFileFromUriIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId200ApplicationPdfString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId200ImageJpegString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId200ImageJpgString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId200ImagePngString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileFromUriId400ApplicationJson)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileFromUriId401ApplicationJson)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId401ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFileFromUriId404ApplicationJson)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId500ApplicationJsonOneOf", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetFileFromUriIdResponse.prototype, "getFileFromUriId503ApplicationJsonOneOf", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFileFromUriIdResponse.prototype, "statusCode", void 0);
    return GetFileFromUriIdResponse;
}(SpeakeasyBase));
export { GetFileFromUriIdResponse };
