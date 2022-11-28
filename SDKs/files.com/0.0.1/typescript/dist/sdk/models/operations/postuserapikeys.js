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
export var PostUserApiKeysRequestBodyPermissionSetEnum;
(function (PostUserApiKeysRequestBodyPermissionSetEnum) {
    PostUserApiKeysRequestBodyPermissionSetEnum["None"] = "none";
    PostUserApiKeysRequestBodyPermissionSetEnum["Full"] = "full";
    PostUserApiKeysRequestBodyPermissionSetEnum["DesktopApp"] = "desktop_app";
    PostUserApiKeysRequestBodyPermissionSetEnum["SyncApp"] = "sync_app";
    PostUserApiKeysRequestBodyPermissionSetEnum["OfficeIntegration"] = "office_integration";
    PostUserApiKeysRequestBodyPermissionSetEnum["MobileApp"] = "mobile_app";
})(PostUserApiKeysRequestBodyPermissionSetEnum || (PostUserApiKeysRequestBodyPermissionSetEnum = {}));
var PostUserApiKeysRequestBody = /** @class */ (function (_super) {
    __extends(PostUserApiKeysRequestBody, _super);
    function PostUserApiKeysRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expires_at" }),
        __metadata("design:type", Date)
    ], PostUserApiKeysRequestBody.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostUserApiKeysRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PostUserApiKeysRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=permission_set" }),
        __metadata("design:type", String)
    ], PostUserApiKeysRequestBody.prototype, "permissionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostUserApiKeysRequestBody.prototype, "userId", void 0);
    return PostUserApiKeysRequestBody;
}(SpeakeasyBase));
export { PostUserApiKeysRequestBody };
var PostUserApiKeysRequest = /** @class */ (function (_super) {
    __extends(PostUserApiKeysRequest, _super);
    function PostUserApiKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUserApiKeysRequestBody)
    ], PostUserApiKeysRequest.prototype, "request", void 0);
    return PostUserApiKeysRequest;
}(SpeakeasyBase));
export { PostUserApiKeysRequest };
var PostUserApiKeysResponse = /** @class */ (function (_super) {
    __extends(PostUserApiKeysResponse, _super);
    function PostUserApiKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKeyEntity)
    ], PostUserApiKeysResponse.prototype, "apiKeyEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUserApiKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUserApiKeysResponse.prototype, "statusCode", void 0);
    return PostUserApiKeysResponse;
}(SpeakeasyBase));
export { PostUserApiKeysResponse };
