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
var PutTIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutTIdJsonPathParams, _super);
    function PutTIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTIdJsonPathParams.prototype, "id", void 0);
    return PutTIdJsonPathParams;
}(SpeakeasyBase));
export { PutTIdJsonPathParams };
var PutTIdJsonHeaders = /** @class */ (function (_super) {
    __extends(PutTIdJsonHeaders, _super);
    function PutTIdJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PutTIdJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PutTIdJsonHeaders.prototype, "apiUsername", void 0);
    return PutTIdJsonHeaders;
}(SpeakeasyBase));
export { PutTIdJsonHeaders };
var PutTIdJsonRequestBodyTopic = /** @class */ (function (_super) {
    __extends(PutTIdJsonRequestBodyTopic, _super);
    function PutTIdJsonRequestBodyTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category_id" }),
        __metadata("design:type", Number)
    ], PutTIdJsonRequestBodyTopic.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutTIdJsonRequestBodyTopic.prototype, "title", void 0);
    return PutTIdJsonRequestBodyTopic;
}(SpeakeasyBase));
export { PutTIdJsonRequestBodyTopic };
var PutTIdJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutTIdJsonRequestBody, _super);
    function PutTIdJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", PutTIdJsonRequestBodyTopic)
    ], PutTIdJsonRequestBody.prototype, "topic", void 0);
    return PutTIdJsonRequestBody;
}(SpeakeasyBase));
export { PutTIdJsonRequestBody };
var PutTIdJson200ApplicationJsonBasicTopic = /** @class */ (function (_super) {
    __extends(PutTIdJson200ApplicationJsonBasicTopic, _super);
    function PutTIdJson200ApplicationJsonBasicTopic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fancy_title" }),
        __metadata("design:type", String)
    ], PutTIdJson200ApplicationJsonBasicTopic.prototype, "fancyTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutTIdJson200ApplicationJsonBasicTopic.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posts_count" }),
        __metadata("design:type", Number)
    ], PutTIdJson200ApplicationJsonBasicTopic.prototype, "postsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], PutTIdJson200ApplicationJsonBasicTopic.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], PutTIdJson200ApplicationJsonBasicTopic.prototype, "title", void 0);
    return PutTIdJson200ApplicationJsonBasicTopic;
}(SpeakeasyBase));
export { PutTIdJson200ApplicationJsonBasicTopic };
var PutTIdJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTIdJson200ApplicationJson, _super);
    function PutTIdJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basic_topic" }),
        __metadata("design:type", PutTIdJson200ApplicationJsonBasicTopic)
    ], PutTIdJson200ApplicationJson.prototype, "basicTopic", void 0);
    return PutTIdJson200ApplicationJson;
}(SpeakeasyBase));
export { PutTIdJson200ApplicationJson };
var PutTIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutTIdJsonRequest, _super);
    function PutTIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdJsonPathParams)
    ], PutTIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdJsonHeaders)
    ], PutTIdJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTIdJsonRequestBody)
    ], PutTIdJsonRequest.prototype, "request", void 0);
    return PutTIdJsonRequest;
}(SpeakeasyBase));
export { PutTIdJsonRequest };
var PutTIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutTIdJsonResponse, _super);
    function PutTIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdJson200ApplicationJson)
    ], PutTIdJsonResponse.prototype, "putTIdJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTIdJsonResponse.prototype, "statusCode", void 0);
    return PutTIdJsonResponse;
}(SpeakeasyBase));
export { PutTIdJsonResponse };
