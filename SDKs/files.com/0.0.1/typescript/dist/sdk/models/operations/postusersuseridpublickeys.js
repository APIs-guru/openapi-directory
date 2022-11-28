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
var PostUsersUserIdPublicKeysPathParams = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPublicKeysPathParams, _super);
    function PostUsersUserIdPublicKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", Number)
    ], PostUsersUserIdPublicKeysPathParams.prototype, "userId", void 0);
    return PostUsersUserIdPublicKeysPathParams;
}(SpeakeasyBase));
export { PostUsersUserIdPublicKeysPathParams };
var PostUsersUserIdPublicKeysRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPublicKeysRequestBody, _super);
    function PostUsersUserIdPublicKeysRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=public_key" }),
        __metadata("design:type", String)
    ], PostUsersUserIdPublicKeysRequestBody.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=title" }),
        __metadata("design:type", String)
    ], PostUsersUserIdPublicKeysRequestBody.prototype, "title", void 0);
    return PostUsersUserIdPublicKeysRequestBody;
}(SpeakeasyBase));
export { PostUsersUserIdPublicKeysRequestBody };
var PostUsersUserIdPublicKeysRequest = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPublicKeysRequest, _super);
    function PostUsersUserIdPublicKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersUserIdPublicKeysPathParams)
    ], PostUsersUserIdPublicKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUsersUserIdPublicKeysRequestBody)
    ], PostUsersUserIdPublicKeysRequest.prototype, "request", void 0);
    return PostUsersUserIdPublicKeysRequest;
}(SpeakeasyBase));
export { PostUsersUserIdPublicKeysRequest };
var PostUsersUserIdPublicKeysResponse = /** @class */ (function (_super) {
    __extends(PostUsersUserIdPublicKeysResponse, _super);
    function PostUsersUserIdPublicKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersUserIdPublicKeysResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublicKeyEntity)
    ], PostUsersUserIdPublicKeysResponse.prototype, "publicKeyEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersUserIdPublicKeysResponse.prototype, "statusCode", void 0);
    return PostUsersUserIdPublicKeysResponse;
}(SpeakeasyBase));
export { PostUsersUserIdPublicKeysResponse };
