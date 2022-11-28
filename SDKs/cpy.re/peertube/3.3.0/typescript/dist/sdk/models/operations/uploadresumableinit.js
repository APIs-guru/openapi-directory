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
var UploadResumableInitHeaders = /** @class */ (function (_super) {
    __extends(UploadResumableInitHeaders, _super);
    function UploadResumableInitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Upload-Content-Length" }),
        __metadata("design:type", Number)
    ], UploadResumableInitHeaders.prototype, "xUploadContentLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Upload-Content-Type" }),
        __metadata("design:type", String)
    ], UploadResumableInitHeaders.prototype, "xUploadContentType", void 0);
    return UploadResumableInitHeaders;
}(SpeakeasyBase));
export { UploadResumableInitHeaders };
var UploadResumableInitSecurity = /** @class */ (function (_super) {
    __extends(UploadResumableInitSecurity, _super);
    function UploadResumableInitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UploadResumableInitSecurity.prototype, "oAuth2", void 0);
    return UploadResumableInitSecurity;
}(SpeakeasyBase));
export { UploadResumableInitSecurity };
var UploadResumableInitRequest = /** @class */ (function (_super) {
    __extends(UploadResumableInitRequest, _super);
    function UploadResumableInitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadResumableInitHeaders)
    ], UploadResumableInitRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VideoUploadRequestResumable)
    ], UploadResumableInitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadResumableInitSecurity)
    ], UploadResumableInitRequest.prototype, "security", void 0);
    return UploadResumableInitRequest;
}(SpeakeasyBase));
export { UploadResumableInitRequest };
var UploadResumableInitResponse = /** @class */ (function (_super) {
    __extends(UploadResumableInitResponse, _super);
    function UploadResumableInitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadResumableInitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UploadResumableInitResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadResumableInitResponse.prototype, "statusCode", void 0);
    return UploadResumableInitResponse;
}(SpeakeasyBase));
export { UploadResumableInitResponse };
