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
var PostUploadHeaders = /** @class */ (function (_super) {
    __extends(PostUploadHeaders, _super);
    function PostUploadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Recipient-Email" }),
        __metadata("design:type", String)
    ], PostUploadHeaders.prototype, "xRecipientEmail", void 0);
    return PostUploadHeaders;
}(SpeakeasyBase));
export { PostUploadHeaders };
var PostUploadSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostUploadSecurityOption1, _super);
    function PostUploadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostUploadSecurityOption1.prototype, "apiKey", void 0);
    return PostUploadSecurityOption1;
}(SpeakeasyBase));
export { PostUploadSecurityOption1 };
var PostUploadSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostUploadSecurityOption2, _super);
    function PostUploadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2AuthorizationCode)
    ], PostUploadSecurityOption2.prototype, "oauth2AuthorizationCode", void 0);
    return PostUploadSecurityOption2;
}(SpeakeasyBase));
export { PostUploadSecurityOption2 };
var PostUploadSecurity = /** @class */ (function (_super) {
    __extends(PostUploadSecurity, _super);
    function PostUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUploadSecurityOption1)
    ], PostUploadSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostUploadSecurityOption2)
    ], PostUploadSecurity.prototype, "option2", void 0);
    return PostUploadSecurity;
}(SpeakeasyBase));
export { PostUploadSecurity };
var PostUploadRequest = /** @class */ (function (_super) {
    __extends(PostUploadRequest, _super);
    function PostUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUploadHeaders)
    ], PostUploadRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Upload)
    ], PostUploadRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUploadSecurity)
    ], PostUploadRequest.prototype, "security", void 0);
    return PostUploadRequest;
}(SpeakeasyBase));
export { PostUploadRequest };
var PostUploadResponse = /** @class */ (function (_super) {
    __extends(PostUploadResponse, _super);
    function PostUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUploadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUploadResponse.prototype, "createdUpload", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Error)
    ], PostUploadResponse.prototype, "error", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PostUploadResponse.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUploadResponse.prototype, "statusCode", void 0);
    return PostUploadResponse;
}(SpeakeasyBase));
export { PostUploadResponse };
