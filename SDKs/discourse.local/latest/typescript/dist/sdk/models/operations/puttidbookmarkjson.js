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
var PutTIdBookmarkJsonPathParams = /** @class */ (function (_super) {
    __extends(PutTIdBookmarkJsonPathParams, _super);
    function PutTIdBookmarkJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutTIdBookmarkJsonPathParams.prototype, "id", void 0);
    return PutTIdBookmarkJsonPathParams;
}(SpeakeasyBase));
export { PutTIdBookmarkJsonPathParams };
var PutTIdBookmarkJsonHeaders = /** @class */ (function (_super) {
    __extends(PutTIdBookmarkJsonHeaders, _super);
    function PutTIdBookmarkJsonHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" }),
        __metadata("design:type", String)
    ], PutTIdBookmarkJsonHeaders.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" }),
        __metadata("design:type", String)
    ], PutTIdBookmarkJsonHeaders.prototype, "apiUsername", void 0);
    return PutTIdBookmarkJsonHeaders;
}(SpeakeasyBase));
export { PutTIdBookmarkJsonHeaders };
var PutTIdBookmarkJsonRequest = /** @class */ (function (_super) {
    __extends(PutTIdBookmarkJsonRequest, _super);
    function PutTIdBookmarkJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdBookmarkJsonPathParams)
    ], PutTIdBookmarkJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutTIdBookmarkJsonHeaders)
    ], PutTIdBookmarkJsonRequest.prototype, "headers", void 0);
    return PutTIdBookmarkJsonRequest;
}(SpeakeasyBase));
export { PutTIdBookmarkJsonRequest };
var PutTIdBookmarkJsonResponse = /** @class */ (function (_super) {
    __extends(PutTIdBookmarkJsonResponse, _super);
    function PutTIdBookmarkJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutTIdBookmarkJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutTIdBookmarkJsonResponse.prototype, "statusCode", void 0);
    return PutTIdBookmarkJsonResponse;
}(SpeakeasyBase));
export { PutTIdBookmarkJsonResponse };
