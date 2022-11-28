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
var PutTIdChangeTimestampJsonPathParams = /** @class */ (function (_super) {
    __extends(PutTIdChangeTimestampJsonPathParams, _super);
    function PutTIdChangeTimestampJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTIdChangeTimestampJsonPathParams.prototype, "id", void 0);
    return PutTIdChangeTimestampJsonPathParams;
}(SpeakeasyBase));
export { PutTIdChangeTimestampJsonPathParams };
var PutTIdChangeTimestampJsonHeaders = /** @class */ (function (_super) {
    __extends(PutTIdChangeTimestampJsonHeaders, _super);
    function PutTIdChangeTimestampJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PutTIdChangeTimestampJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PutTIdChangeTimestampJsonHeaders.prototype, "apiUsername", void 0);
    return PutTIdChangeTimestampJsonHeaders;
}(SpeakeasyBase));
export { PutTIdChangeTimestampJsonHeaders };
var PutTIdChangeTimestampJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutTIdChangeTimestampJsonRequestBody, _super);
    function PutTIdChangeTimestampJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], PutTIdChangeTimestampJsonRequestBody.prototype, "timestamp", void 0);
    return PutTIdChangeTimestampJsonRequestBody;
}(SpeakeasyBase));
export { PutTIdChangeTimestampJsonRequestBody };
var PutTIdChangeTimestampJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutTIdChangeTimestampJson200ApplicationJson, _super);
    function PutTIdChangeTimestampJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", String)
    ], PutTIdChangeTimestampJson200ApplicationJson.prototype, "success", void 0);
    return PutTIdChangeTimestampJson200ApplicationJson;
}(SpeakeasyBase));
export { PutTIdChangeTimestampJson200ApplicationJson };
var PutTIdChangeTimestampJsonRequest = /** @class */ (function (_super) {
    __extends(PutTIdChangeTimestampJsonRequest, _super);
    function PutTIdChangeTimestampJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdChangeTimestampJsonPathParams)
    ], PutTIdChangeTimestampJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdChangeTimestampJsonHeaders)
    ], PutTIdChangeTimestampJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutTIdChangeTimestampJsonRequestBody)
    ], PutTIdChangeTimestampJsonRequest.prototype, "request", void 0);
    return PutTIdChangeTimestampJsonRequest;
}(SpeakeasyBase));
export { PutTIdChangeTimestampJsonRequest };
var PutTIdChangeTimestampJsonResponse = /** @class */ (function (_super) {
    __extends(PutTIdChangeTimestampJsonResponse, _super);
    function PutTIdChangeTimestampJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTIdChangeTimestampJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdChangeTimestampJson200ApplicationJson)
    ], PutTIdChangeTimestampJsonResponse.prototype, "putTIdChangeTimestampJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTIdChangeTimestampJsonResponse.prototype, "statusCode", void 0);
    return PutTIdChangeTimestampJsonResponse;
}(SpeakeasyBase));
export { PutTIdChangeTimestampJsonResponse };
