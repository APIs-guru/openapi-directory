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
var PostTIdTimerJsonPathParams = /** @class */ (function (_super) {
    __extends(PostTIdTimerJsonPathParams, _super);
    function PostTIdTimerJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostTIdTimerJsonPathParams.prototype, "id", void 0);
    return PostTIdTimerJsonPathParams;
}(SpeakeasyBase));
export { PostTIdTimerJsonPathParams };
var PostTIdTimerJsonHeaders = /** @class */ (function (_super) {
    __extends(PostTIdTimerJsonHeaders, _super);
    function PostTIdTimerJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PostTIdTimerJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PostTIdTimerJsonHeaders.prototype, "apiUsername", void 0);
    return PostTIdTimerJsonHeaders;
}(SpeakeasyBase));
export { PostTIdTimerJsonHeaders };
var PostTIdTimerJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostTIdTimerJsonRequestBody, _super);
    function PostTIdTimerJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=based_on_last_post" }),
        __metadata("design:type", Boolean)
    ], PostTIdTimerJsonRequestBody.prototype, "basedOnLastPost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], PostTIdTimerJsonRequestBody.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_type" }),
        __metadata("design:type", String)
    ], PostTIdTimerJsonRequestBody.prototype, "statusType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", String)
    ], PostTIdTimerJsonRequestBody.prototype, "time", void 0);
    return PostTIdTimerJsonRequestBody;
}(SpeakeasyBase));
export { PostTIdTimerJsonRequestBody };
var PostTIdTimerJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTIdTimerJson200ApplicationJson, _super);
    function PostTIdTimerJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=based_on_last_post" }),
        __metadata("design:type", Boolean)
    ], PostTIdTimerJson200ApplicationJson.prototype, "basedOnLastPost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", String)
    ], PostTIdTimerJson200ApplicationJson.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Boolean)
    ], PostTIdTimerJson200ApplicationJson.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], PostTIdTimerJson200ApplicationJson.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=execute_at" }),
        __metadata("design:type", String)
    ], PostTIdTimerJson200ApplicationJson.prototype, "executeAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], PostTIdTimerJson200ApplicationJson.prototype, "success", void 0);
    return PostTIdTimerJson200ApplicationJson;
}(SpeakeasyBase));
export { PostTIdTimerJson200ApplicationJson };
var PostTIdTimerJsonRequest = /** @class */ (function (_super) {
    __extends(PostTIdTimerJsonRequest, _super);
    function PostTIdTimerJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdTimerJsonPathParams)
    ], PostTIdTimerJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdTimerJsonHeaders)
    ], PostTIdTimerJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTIdTimerJsonRequestBody)
    ], PostTIdTimerJsonRequest.prototype, "request", void 0);
    return PostTIdTimerJsonRequest;
}(SpeakeasyBase));
export { PostTIdTimerJsonRequest };
var PostTIdTimerJsonResponse = /** @class */ (function (_super) {
    __extends(PostTIdTimerJsonResponse, _super);
    function PostTIdTimerJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTIdTimerJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdTimerJson200ApplicationJson)
    ], PostTIdTimerJsonResponse.prototype, "postTIdTimerJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTIdTimerJsonResponse.prototype, "statusCode", void 0);
    return PostTIdTimerJsonResponse;
}(SpeakeasyBase));
export { PostTIdTimerJsonResponse };
