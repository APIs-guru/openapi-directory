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
var PostTIdNotificationsJsonPathParams = /** @class */ (function (_super) {
    __extends(PostTIdNotificationsJsonPathParams, _super);
    function PostTIdNotificationsJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostTIdNotificationsJsonPathParams.prototype, "id", void 0);
    return PostTIdNotificationsJsonPathParams;
}(SpeakeasyBase));
export { PostTIdNotificationsJsonPathParams };
var PostTIdNotificationsJsonHeaders = /** @class */ (function (_super) {
    __extends(PostTIdNotificationsJsonHeaders, _super);
    function PostTIdNotificationsJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PostTIdNotificationsJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PostTIdNotificationsJsonHeaders.prototype, "apiUsername", void 0);
    return PostTIdNotificationsJsonHeaders;
}(SpeakeasyBase));
export { PostTIdNotificationsJsonHeaders };
export var PostTIdNotificationsJsonRequestBodyNotificationLevelEnum;
(function (PostTIdNotificationsJsonRequestBodyNotificationLevelEnum) {
    PostTIdNotificationsJsonRequestBodyNotificationLevelEnum["Zero"] = "0";
    PostTIdNotificationsJsonRequestBodyNotificationLevelEnum["One"] = "1";
    PostTIdNotificationsJsonRequestBodyNotificationLevelEnum["Two"] = "2";
    PostTIdNotificationsJsonRequestBodyNotificationLevelEnum["Three"] = "3";
})(PostTIdNotificationsJsonRequestBodyNotificationLevelEnum || (PostTIdNotificationsJsonRequestBodyNotificationLevelEnum = {}));
var PostTIdNotificationsJsonRequestBody = /** @class */ (function (_super) {
    __extends(PostTIdNotificationsJsonRequestBody, _super);
    function PostTIdNotificationsJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_level" }),
        __metadata("design:type", String)
    ], PostTIdNotificationsJsonRequestBody.prototype, "notificationLevel", void 0);
    return PostTIdNotificationsJsonRequestBody;
}(SpeakeasyBase));
export { PostTIdNotificationsJsonRequestBody };
var PostTIdNotificationsJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostTIdNotificationsJson200ApplicationJson, _super);
    function PostTIdNotificationsJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], PostTIdNotificationsJson200ApplicationJson.prototype, "success", void 0);
    return PostTIdNotificationsJson200ApplicationJson;
}(SpeakeasyBase));
export { PostTIdNotificationsJson200ApplicationJson };
var PostTIdNotificationsJsonRequest = /** @class */ (function (_super) {
    __extends(PostTIdNotificationsJsonRequest, _super);
    function PostTIdNotificationsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdNotificationsJsonPathParams)
    ], PostTIdNotificationsJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdNotificationsJsonHeaders)
    ], PostTIdNotificationsJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostTIdNotificationsJsonRequestBody)
    ], PostTIdNotificationsJsonRequest.prototype, "request", void 0);
    return PostTIdNotificationsJsonRequest;
}(SpeakeasyBase));
export { PostTIdNotificationsJsonRequest };
var PostTIdNotificationsJsonResponse = /** @class */ (function (_super) {
    __extends(PostTIdNotificationsJsonResponse, _super);
    function PostTIdNotificationsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostTIdNotificationsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostTIdNotificationsJson200ApplicationJson)
    ], PostTIdNotificationsJsonResponse.prototype, "postTIdNotificationsJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostTIdNotificationsJsonResponse.prototype, "statusCode", void 0);
    return PostTIdNotificationsJsonResponse;
}(SpeakeasyBase));
export { PostTIdNotificationsJsonResponse };
