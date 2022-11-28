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
var PostPermissionsRequestBody = /** @class */ (function (_super) {
    __extends(PostPermissionsRequestBody, _super);
    function PostPermissionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", Number)
    ], PostPermissionsRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=path" }),
        __metadata("design:type", String)
    ], PostPermissionsRequestBody.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=permission" }),
        __metadata("design:type", String)
    ], PostPermissionsRequestBody.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=recursive" }),
        __metadata("design:type", Boolean)
    ], PostPermissionsRequestBody.prototype, "recursive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_id" }),
        __metadata("design:type", Number)
    ], PostPermissionsRequestBody.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PostPermissionsRequestBody.prototype, "username", void 0);
    return PostPermissionsRequestBody;
}(SpeakeasyBase));
export { PostPermissionsRequestBody };
var PostPermissionsRequest = /** @class */ (function (_super) {
    __extends(PostPermissionsRequest, _super);
    function PostPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostPermissionsRequestBody)
    ], PostPermissionsRequest.prototype, "request", void 0);
    return PostPermissionsRequest;
}(SpeakeasyBase));
export { PostPermissionsRequest };
var PostPermissionsResponse = /** @class */ (function (_super) {
    __extends(PostPermissionsResponse, _super);
    function PostPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PermissionEntity)
    ], PostPermissionsResponse.prototype, "permissionEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPermissionsResponse.prototype, "statusCode", void 0);
    return PostPermissionsResponse;
}(SpeakeasyBase));
export { PostPermissionsResponse };
