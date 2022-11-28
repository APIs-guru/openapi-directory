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
var PostUsersJsonHeaders = /** @class */ (function (_super) {
    __extends(PostUsersJsonHeaders, _super);
    function PostUsersJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PostUsersJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PostUsersJsonHeaders.prototype, "apiUsername", void 0);
    return PostUsersJsonHeaders;
}(SpeakeasyBase));
export { PostUsersJsonHeaders };
var PostUsersJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersJsonRequestBody, _super);
    function PostUsersJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostUsersJsonRequestBody.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approved" }),
        __metadata("design:type", Boolean)
    ], PostUsersJsonRequestBody.prototype, "approved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PostUsersJsonRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostUsersJsonRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostUsersJsonRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_fields[1]" }),
        __metadata("design:type", String)
    ], PostUsersJsonRequestBody.prototype, "userFields1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostUsersJsonRequestBody.prototype, "username", void 0);
    return PostUsersJsonRequestBody;
}(SpeakeasyBase));
export { PostUsersJsonRequestBody };
var PostUsersJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostUsersJson200ApplicationJson, _super);
    function PostUsersJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PostUsersJson200ApplicationJson.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostUsersJson200ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PostUsersJson200ApplicationJson.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], PostUsersJson200ApplicationJson.prototype, "userId", void 0);
    return PostUsersJson200ApplicationJson;
}(SpeakeasyBase));
export { PostUsersJson200ApplicationJson };
var PostUsersJsonRequest = /** @class */ (function (_super) {
    __extends(PostUsersJsonRequest, _super);
    function PostUsersJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersJsonHeaders)
    ], PostUsersJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostUsersJsonRequestBody)
    ], PostUsersJsonRequest.prototype, "request", void 0);
    return PostUsersJsonRequest;
}(SpeakeasyBase));
export { PostUsersJsonRequest };
var PostUsersJsonResponse = /** @class */ (function (_super) {
    __extends(PostUsersJsonResponse, _super);
    function PostUsersJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUsersJson200ApplicationJson)
    ], PostUsersJsonResponse.prototype, "postUsersJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersJsonResponse.prototype, "statusCode", void 0);
    return PostUsersJsonResponse;
}(SpeakeasyBase));
export { PostUsersJsonResponse };
