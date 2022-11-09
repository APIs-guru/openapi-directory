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
var FetchUploadStatusByIdPathParams = /** @class */ (function (_super) {
    __extends(FetchUploadStatusByIdPathParams, _super);
    function FetchUploadStatusByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=uploadId" }),
        __metadata("design:type", String)
    ], FetchUploadStatusByIdPathParams.prototype, "uploadId", void 0);
    return FetchUploadStatusByIdPathParams;
}(SpeakeasyBase));
export { FetchUploadStatusByIdPathParams };
var FetchUploadStatusByIdSecurityOption1 = /** @class */ (function (_super) {
    __extends(FetchUploadStatusByIdSecurityOption1, _super);
    function FetchUploadStatusByIdSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FetchUploadStatusByIdSecurityOption1.prototype, "apiKey", void 0);
    return FetchUploadStatusByIdSecurityOption1;
}(SpeakeasyBase));
export { FetchUploadStatusByIdSecurityOption1 };
var FetchUploadStatusByIdSecurityOption2 = /** @class */ (function (_super) {
    __extends(FetchUploadStatusByIdSecurityOption2, _super);
    function FetchUploadStatusByIdSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], FetchUploadStatusByIdSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return FetchUploadStatusByIdSecurityOption2;
}(SpeakeasyBase));
export { FetchUploadStatusByIdSecurityOption2 };
var FetchUploadStatusByIdSecurity = /** @class */ (function (_super) {
    __extends(FetchUploadStatusByIdSecurity, _super);
    function FetchUploadStatusByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FetchUploadStatusByIdSecurityOption1)
    ], FetchUploadStatusByIdSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FetchUploadStatusByIdSecurityOption2)
    ], FetchUploadStatusByIdSecurity.prototype, "option2", void 0);
    return FetchUploadStatusByIdSecurity;
}(SpeakeasyBase));
export { FetchUploadStatusByIdSecurity };
var FetchUploadStatusByIdRequest = /** @class */ (function (_super) {
    __extends(FetchUploadStatusByIdRequest, _super);
    function FetchUploadStatusByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUploadStatusByIdPathParams)
    ], FetchUploadStatusByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchUploadStatusByIdSecurity)
    ], FetchUploadStatusByIdRequest.prototype, "security", void 0);
    return FetchUploadStatusByIdRequest;
}(SpeakeasyBase));
export { FetchUploadStatusByIdRequest };
var FetchUploadStatusByIdResponse = /** @class */ (function (_super) {
    __extends(FetchUploadStatusByIdResponse, _super);
    function FetchUploadStatusByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchUploadStatusByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], FetchUploadStatusByIdResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FetchUploadStatusByIdResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchUploadStatusByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UploadStatus)
    ], FetchUploadStatusByIdResponse.prototype, "uploadStatus", void 0);
    return FetchUploadStatusByIdResponse;
}(SpeakeasyBase));
export { FetchUploadStatusByIdResponse };
