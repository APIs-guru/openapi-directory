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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var GetEAadhaarDataInXmlFormatIdSecurity = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatIdSecurity, _super);
    function GetEAadhaarDataInXmlFormatIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetEAadhaarDataInXmlFormatIdSecurity.prototype, "bearerAuth", void 0);
    return GetEAadhaarDataInXmlFormatIdSecurity;
}(SpeakeasyBase));
export { GetEAadhaarDataInXmlFormatIdSecurity };
var GetEAadhaarDataInXmlFormatId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatId401ApplicationJson, _super);
    function GetEAadhaarDataInXmlFormatId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEAadhaarDataInXmlFormatId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetEAadhaarDataInXmlFormatId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetEAadhaarDataInXmlFormatId401ApplicationJson;
}(SpeakeasyBase));
export { GetEAadhaarDataInXmlFormatId401ApplicationJson };
var GetEAadhaarDataInXmlFormatId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatId404ApplicationJson, _super);
    function GetEAadhaarDataInXmlFormatId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatId404ApplicationJson.prototype, "errorDescription", void 0);
    return GetEAadhaarDataInXmlFormatId404ApplicationJson;
}(SpeakeasyBase));
export { GetEAadhaarDataInXmlFormatId404ApplicationJson };
var GetEAadhaarDataInXmlFormatIdRequest = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatIdRequest, _super);
    function GetEAadhaarDataInXmlFormatIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEAadhaarDataInXmlFormatIdSecurity)
    ], GetEAadhaarDataInXmlFormatIdRequest.prototype, "security", void 0);
    return GetEAadhaarDataInXmlFormatIdRequest;
}(SpeakeasyBase));
export { GetEAadhaarDataInXmlFormatIdRequest };
var GetEAadhaarDataInXmlFormatIdResponse = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatIdResponse, _super);
    function GetEAadhaarDataInXmlFormatIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEAadhaarDataInXmlFormatId401ApplicationJson)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXmlFormatId401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEAadhaarDataInXmlFormatId404ApplicationJson)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXmlFormatId404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXmlFormatId500ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXmlFormatId503ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "statusCode", void 0);
    return GetEAadhaarDataInXmlFormatIdResponse;
}(SpeakeasyBase));
export { GetEAadhaarDataInXmlFormatIdResponse };
