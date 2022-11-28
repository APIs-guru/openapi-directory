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
var PutCategoriesIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutCategoriesIdJsonPathParams, _super);
    function PutCategoriesIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutCategoriesIdJsonPathParams.prototype, "id", void 0);
    return PutCategoriesIdJsonPathParams;
}(SpeakeasyBase));
export { PutCategoriesIdJsonPathParams };
var PutCategoriesIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutCategoriesIdJsonRequest, _super);
    function PutCategoriesIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCategoriesIdJsonPathParams)
    ], PutCategoriesIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PutCategoriesIdJsonRequest.prototype, "request", void 0);
    return PutCategoriesIdJsonRequest;
}(SpeakeasyBase));
export { PutCategoriesIdJsonRequest };
var PutCategoriesIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutCategoriesIdJsonResponse, _super);
    function PutCategoriesIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCategoriesIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutCategoriesIdJsonResponse.prototype, "putCategoriesIdJson200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCategoriesIdJsonResponse.prototype, "statusCode", void 0);
    return PutCategoriesIdJsonResponse;
}(SpeakeasyBase));
export { PutCategoriesIdJsonResponse };
