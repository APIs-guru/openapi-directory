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
var GetHighlightsByCategoryPathParams = /** @class */ (function (_super) {
    __extends(GetHighlightsByCategoryPathParams, _super);
    function GetHighlightsByCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" }),
        __metadata("design:type", String)
    ], GetHighlightsByCategoryPathParams.prototype, "category", void 0);
    return GetHighlightsByCategoryPathParams;
}(SpeakeasyBase));
export { GetHighlightsByCategoryPathParams };
var GetHighlightsByCategoryQueryParams = /** @class */ (function (_super) {
    __extends(GetHighlightsByCategoryQueryParams, _super);
    function GetHighlightsByCategoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" }),
        __metadata("design:type", String)
    ], GetHighlightsByCategoryQueryParams.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], GetHighlightsByCategoryQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" }),
        __metadata("design:type", Array)
    ], GetHighlightsByCategoryQueryParams.prototype, "mixin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], GetHighlightsByCategoryQueryParams.prototype, "rights", void 0);
    return GetHighlightsByCategoryQueryParams;
}(SpeakeasyBase));
export { GetHighlightsByCategoryQueryParams };
var GetHighlightsByCategoryRequest = /** @class */ (function (_super) {
    __extends(GetHighlightsByCategoryRequest, _super);
    function GetHighlightsByCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHighlightsByCategoryPathParams)
    ], GetHighlightsByCategoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetHighlightsByCategoryQueryParams)
    ], GetHighlightsByCategoryRequest.prototype, "queryParams", void 0);
    return GetHighlightsByCategoryRequest;
}(SpeakeasyBase));
export { GetHighlightsByCategoryRequest };
var GetHighlightsByCategoryResponse = /** @class */ (function (_super) {
    __extends(GetHighlightsByCategoryResponse, _super);
    function GetHighlightsByCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetHighlightsByCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetHighlightsByCategoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetHighlightsByCategoryResponse.prototype, "ibl", void 0);
    return GetHighlightsByCategoryResponse;
}(SpeakeasyBase));
export { GetHighlightsByCategoryResponse };
