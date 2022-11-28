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
export var UploadPhotoRequestBodyContentTypeEnum;
(function (UploadPhotoRequestBodyContentTypeEnum) {
    UploadPhotoRequestBodyContentTypeEnum["One"] = "1";
    UploadPhotoRequestBodyContentTypeEnum["Two"] = "2";
    UploadPhotoRequestBodyContentTypeEnum["Three"] = "3";
})(UploadPhotoRequestBodyContentTypeEnum || (UploadPhotoRequestBodyContentTypeEnum = {}));
export var UploadPhotoRequestBodyHiddenEnum;
(function (UploadPhotoRequestBodyHiddenEnum) {
    UploadPhotoRequestBodyHiddenEnum["One"] = "1";
    UploadPhotoRequestBodyHiddenEnum["Two"] = "2";
})(UploadPhotoRequestBodyHiddenEnum || (UploadPhotoRequestBodyHiddenEnum = {}));
export var UploadPhotoRequestBodyIsFamilyEnum;
(function (UploadPhotoRequestBodyIsFamilyEnum) {
    UploadPhotoRequestBodyIsFamilyEnum["Zero"] = "0";
    UploadPhotoRequestBodyIsFamilyEnum["One"] = "1";
})(UploadPhotoRequestBodyIsFamilyEnum || (UploadPhotoRequestBodyIsFamilyEnum = {}));
export var UploadPhotoRequestBodyIsFriendEnum;
(function (UploadPhotoRequestBodyIsFriendEnum) {
    UploadPhotoRequestBodyIsFriendEnum["Zero"] = "0";
    UploadPhotoRequestBodyIsFriendEnum["One"] = "1";
})(UploadPhotoRequestBodyIsFriendEnum || (UploadPhotoRequestBodyIsFriendEnum = {}));
export var UploadPhotoRequestBodyIsPublicEnum;
(function (UploadPhotoRequestBodyIsPublicEnum) {
    UploadPhotoRequestBodyIsPublicEnum["Zero"] = "0";
    UploadPhotoRequestBodyIsPublicEnum["One"] = "1";
})(UploadPhotoRequestBodyIsPublicEnum || (UploadPhotoRequestBodyIsPublicEnum = {}));
var UploadPhotoRequestBodyPhoto = /** @class */ (function (_super) {
    __extends(UploadPhotoRequestBodyPhoto, _super);
    function UploadPhotoRequestBodyPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadPhotoRequestBodyPhoto.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=photo" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBodyPhoto.prototype, "photo", void 0);
    return UploadPhotoRequestBodyPhoto;
}(SpeakeasyBase));
export { UploadPhotoRequestBodyPhoto };
export var UploadPhotoRequestBodySafetyLevelEnum;
(function (UploadPhotoRequestBodySafetyLevelEnum) {
    UploadPhotoRequestBodySafetyLevelEnum["One"] = "1";
    UploadPhotoRequestBodySafetyLevelEnum["Two"] = "2";
    UploadPhotoRequestBodySafetyLevelEnum["Three"] = "3";
})(UploadPhotoRequestBodySafetyLevelEnum || (UploadPhotoRequestBodySafetyLevelEnum = {}));
var UploadPhotoRequestBody = /** @class */ (function (_super) {
    __extends(UploadPhotoRequestBody, _super);
    function UploadPhotoRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=api_key" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=content_type" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=description" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=hidden" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=is_family" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "isFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=is_friend" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "isFriend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=is_public" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadPhotoRequestBodyPhoto)
    ], UploadPhotoRequestBody.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=safety_level" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "safetyLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=tags" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=title" }),
        __metadata("design:type", String)
    ], UploadPhotoRequestBody.prototype, "title", void 0);
    return UploadPhotoRequestBody;
}(SpeakeasyBase));
export { UploadPhotoRequestBody };
var UploadPhotoRequest = /** @class */ (function (_super) {
    __extends(UploadPhotoRequest, _super);
    function UploadPhotoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadPhotoRequestBody)
    ], UploadPhotoRequest.prototype, "request", void 0);
    return UploadPhotoRequest;
}(SpeakeasyBase));
export { UploadPhotoRequest };
var UploadPhotoResponse = /** @class */ (function (_super) {
    __extends(UploadPhotoResponse, _super);
    function UploadPhotoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadPhotoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadPhotoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UploadPhotoResponse.prototype, "uploadPhoto200ApplicationJsonObject", void 0);
    return UploadPhotoResponse;
}(SpeakeasyBase));
export { UploadPhotoResponse };
