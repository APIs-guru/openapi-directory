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
var PostTIdInviteJsonPathParams = /** @class */ (function (_super) {
    __extends(PostTIdInviteJsonPathParams, _super);
    function PostTIdInviteJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostTIdInviteJsonPathParams.prototype, "id", void 0);
    return PostTIdInviteJsonPathParams;
}(SpeakeasyBase));
export { PostTIdInviteJsonPathParams };
var PostTIdInviteJsonHeaders = /** @class */ (function (_super) {
    __extends(PostTIdInviteJsonHeaders, _super);
    function PostTIdInviteJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PostTIdInviteJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PostTIdInviteJsonHeaders.prototype, "apiUsername", void 0);
    return PostTIdInviteJsonHeaders;
}(SpeakeasyBase));
export { PostTIdInviteJsonHeaders };
var PostTIdInviteJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostTIdInviteJsonRequestBody, _super);
    function PostTIdInviteJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostTIdInviteJsonRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], PostTIdInviteJsonRequestBody.prototype, "user", void 0);
    return PostTIdInviteJsonRequestBody;
}(SpeakeasyBase));
export { PostTIdInviteJsonRequestBody };
var PostTIdInviteJson200ApplicationJsonUser = /** @class */ (function (_super) {
    __extends(PostTIdInviteJson200ApplicationJsonUser, _super);
    function PostTIdInviteJson200ApplicationJsonUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_template" }),
        __metadata("design:type", String)
    ], PostTIdInviteJson200ApplicationJsonUser.prototype, "avatarTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostTIdInviteJson200ApplicationJsonUser.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostTIdInviteJson200ApplicationJsonUser.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostTIdInviteJson200ApplicationJsonUser.prototype, "username", void 0);
    return PostTIdInviteJson200ApplicationJsonUser;
}(SpeakeasyBase));
export { PostTIdInviteJson200ApplicationJsonUser };
var PostTIdInviteJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTIdInviteJson200ApplicationJson, _super);
    function PostTIdInviteJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", PostTIdInviteJson200ApplicationJsonUser)
    ], PostTIdInviteJson200ApplicationJson.prototype, "user", void 0);
    return PostTIdInviteJson200ApplicationJson;
}(SpeakeasyBase));
export { PostTIdInviteJson200ApplicationJson };
var PostTIdInviteJsonRequest = /** @class */ (function (_super) {
    __extends(PostTIdInviteJsonRequest, _super);
    function PostTIdInviteJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdInviteJsonPathParams)
    ], PostTIdInviteJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdInviteJsonHeaders)
    ], PostTIdInviteJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTIdInviteJsonRequestBody)
    ], PostTIdInviteJsonRequest.prototype, "request", void 0);
    return PostTIdInviteJsonRequest;
}(SpeakeasyBase));
export { PostTIdInviteJsonRequest };
var PostTIdInviteJsonResponse = /** @class */ (function (_super) {
    __extends(PostTIdInviteJsonResponse, _super);
    function PostTIdInviteJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTIdInviteJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdInviteJson200ApplicationJson)
    ], PostTIdInviteJsonResponse.prototype, "postTIdInviteJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTIdInviteJsonResponse.prototype, "statusCode", void 0);
    return PostTIdInviteJsonResponse;
}(SpeakeasyBase));
export { PostTIdInviteJsonResponse };
