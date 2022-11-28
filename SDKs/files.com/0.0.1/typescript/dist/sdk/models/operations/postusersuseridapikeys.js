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
var PostUsersUserIdApiKeysPathParams = /** @class */ (function (_super) {
    __extends(PostUsersUserIdApiKeysPathParams, _super);
    function PostUsersUserIdApiKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], PostUsersUserIdApiKeysPathParams.prototype, "userId", void 0);
    return PostUsersUserIdApiKeysPathParams;
}(SpeakeasyBase));
export { PostUsersUserIdApiKeysPathParams };
export var PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;
(function (PostUsersUserIdApiKeysRequestBodyPermissionSetEnum) {
    PostUsersUserIdApiKeysRequestBodyPermissionSetEnum["None"] = "none";
    PostUsersUserIdApiKeysRequestBodyPermissionSetEnum["Full"] = "full";
    PostUsersUserIdApiKeysRequestBodyPermissionSetEnum["DesktopApp"] = "desktop_app";
    PostUsersUserIdApiKeysRequestBodyPermissionSetEnum["SyncApp"] = "sync_app";
    PostUsersUserIdApiKeysRequestBodyPermissionSetEnum["OfficeIntegration"] = "office_integration";
    PostUsersUserIdApiKeysRequestBodyPermissionSetEnum["MobileApp"] = "mobile_app";
})(PostUsersUserIdApiKeysRequestBodyPermissionSetEnum || (PostUsersUserIdApiKeysRequestBodyPermissionSetEnum = {}));
var PostUsersUserIdApiKeysRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersUserIdApiKeysRequestBody, _super);
    function PostUsersUserIdApiKeysRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=expires_at" }),
        __metadata("design:type", Date)
    ], PostUsersUserIdApiKeysRequestBody.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostUsersUserIdApiKeysRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PostUsersUserIdApiKeysRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=permission_set" }),
        __metadata("design:type", String)
    ], PostUsersUserIdApiKeysRequestBody.prototype, "permissionSet", void 0);
    return PostUsersUserIdApiKeysRequestBody;
}(SpeakeasyBase));
export { PostUsersUserIdApiKeysRequestBody };
var PostUsersUserIdApiKeysRequest = /** @class */ (function (_super) {
    __extends(PostUsersUserIdApiKeysRequest, _super);
    function PostUsersUserIdApiKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdApiKeysPathParams)
    ], PostUsersUserIdApiKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUsersUserIdApiKeysRequestBody)
    ], PostUsersUserIdApiKeysRequest.prototype, "request", void 0);
    return PostUsersUserIdApiKeysRequest;
}(SpeakeasyBase));
export { PostUsersUserIdApiKeysRequest };
var PostUsersUserIdApiKeysResponse = /** @class */ (function (_super) {
    __extends(PostUsersUserIdApiKeysResponse, _super);
    function PostUsersUserIdApiKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiKeyEntity)
    ], PostUsersUserIdApiKeysResponse.prototype, "apiKeyEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersUserIdApiKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersUserIdApiKeysResponse.prototype, "statusCode", void 0);
    return PostUsersUserIdApiKeysResponse;
}(SpeakeasyBase));
export { PostUsersUserIdApiKeysResponse };
