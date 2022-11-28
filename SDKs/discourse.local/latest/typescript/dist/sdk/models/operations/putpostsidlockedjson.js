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
var PutPostsIdLockedJsonPathParams = /** @class */ (function (_super) {
    __extends(PutPostsIdLockedJsonPathParams, _super);
    function PutPostsIdLockedJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutPostsIdLockedJsonPathParams.prototype, "id", void 0);
    return PutPostsIdLockedJsonPathParams;
}(SpeakeasyBase));
export { PutPostsIdLockedJsonPathParams };
var PutPostsIdLockedJsonHeaders = /** @class */ (function (_super) {
    __extends(PutPostsIdLockedJsonHeaders, _super);
    function PutPostsIdLockedJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PutPostsIdLockedJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PutPostsIdLockedJsonHeaders.prototype, "apiUsername", void 0);
    return PutPostsIdLockedJsonHeaders;
}(SpeakeasyBase));
export { PutPostsIdLockedJsonHeaders };
var PutPostsIdLockedJsonRequestBody = /** @class */ (function (_super) {
    __extends(PutPostsIdLockedJsonRequestBody, _super);
    function PutPostsIdLockedJsonRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdLockedJsonRequestBody.prototype, "locked", void 0);
    return PutPostsIdLockedJsonRequestBody;
}(SpeakeasyBase));
export { PutPostsIdLockedJsonRequestBody };
var PutPostsIdLockedJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutPostsIdLockedJson200ApplicationJson, _super);
    function PutPostsIdLockedJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], PutPostsIdLockedJson200ApplicationJson.prototype, "locked", void 0);
    return PutPostsIdLockedJson200ApplicationJson;
}(SpeakeasyBase));
export { PutPostsIdLockedJson200ApplicationJson };
var PutPostsIdLockedJsonRequest = /** @class */ (function (_super) {
    __extends(PutPostsIdLockedJsonRequest, _super);
    function PutPostsIdLockedJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPostsIdLockedJsonPathParams)
    ], PutPostsIdLockedJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPostsIdLockedJsonHeaders)
    ], PutPostsIdLockedJsonRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutPostsIdLockedJsonRequestBody)
    ], PutPostsIdLockedJsonRequest.prototype, "request", void 0);
    return PutPostsIdLockedJsonRequest;
}(SpeakeasyBase));
export { PutPostsIdLockedJsonRequest };
var PutPostsIdLockedJsonResponse = /** @class */ (function (_super) {
    __extends(PutPostsIdLockedJsonResponse, _super);
    function PutPostsIdLockedJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutPostsIdLockedJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPostsIdLockedJson200ApplicationJson)
    ], PutPostsIdLockedJsonResponse.prototype, "putPostsIdLockedJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutPostsIdLockedJsonResponse.prototype, "statusCode", void 0);
    return PutPostsIdLockedJsonResponse;
}(SpeakeasyBase));
export { PutPostsIdLockedJsonResponse };
