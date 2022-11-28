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
var RecipeRecentViewsQueryParams = /** @class */ (function (_super) {
    __extends(RecipeRecentViewsQueryParams, _super);
    function RecipeRecentViewsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" }),
        __metadata("design:type", Number)
    ], RecipeRecentViewsQueryParams.prototype, "pg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" }),
        __metadata("design:type", Number)
    ], RecipeRecentViewsQueryParams.prototype, "rpp", void 0);
    return RecipeRecentViewsQueryParams;
}(SpeakeasyBase));
export { RecipeRecentViewsQueryParams };
var RecipeRecentViewsRequest = /** @class */ (function (_super) {
    __extends(RecipeRecentViewsRequest, _super);
    function RecipeRecentViewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeRecentViewsQueryParams)
    ], RecipeRecentViewsRequest.prototype, "queryParams", void 0);
    return RecipeRecentViewsRequest;
}(SpeakeasyBase));
export { RecipeRecentViewsRequest };
var RecipeRecentViewsResponse = /** @class */ (function (_super) {
    __extends(RecipeRecentViewsResponse, _super);
    function RecipeRecentViewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BigOvenModelRecipeInfoDateTuple2 }),
        __metadata("design:type", Array)
    ], RecipeRecentViewsResponse.prototype, "bigOvenModelRecipeInfoDateTuple2s", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeRecentViewsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeRecentViewsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeRecentViewsResponse.prototype, "statusCode", void 0);
    return RecipeRecentViewsResponse;
}(SpeakeasyBase));
export { RecipeRecentViewsResponse };
