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
var RecipeAutoCompleteMyRecipesQueryParams = /** @class */ (function (_super) {
    __extends(RecipeAutoCompleteMyRecipesQueryParams, _super);
    function RecipeAutoCompleteMyRecipesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RecipeAutoCompleteMyRecipesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], RecipeAutoCompleteMyRecipesQueryParams.prototype, "query", void 0);
    return RecipeAutoCompleteMyRecipesQueryParams;
}(SpeakeasyBase));
export { RecipeAutoCompleteMyRecipesQueryParams };
var RecipeAutoCompleteMyRecipesRequest = /** @class */ (function (_super) {
    __extends(RecipeAutoCompleteMyRecipesRequest, _super);
    function RecipeAutoCompleteMyRecipesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeAutoCompleteMyRecipesQueryParams)
    ], RecipeAutoCompleteMyRecipesRequest.prototype, "queryParams", void 0);
    return RecipeAutoCompleteMyRecipesRequest;
}(SpeakeasyBase));
export { RecipeAutoCompleteMyRecipesRequest };
var RecipeAutoCompleteMyRecipesResponse = /** @class */ (function (_super) {
    __extends(RecipeAutoCompleteMyRecipesResponse, _super);
    function RecipeAutoCompleteMyRecipesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.BigOvenModelRecipeInfoTiny }),
        __metadata("design:type", Array)
    ], RecipeAutoCompleteMyRecipesResponse.prototype, "bigOvenModelRecipeInfoTinies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeAutoCompleteMyRecipesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeAutoCompleteMyRecipesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeAutoCompleteMyRecipesResponse.prototype, "statusCode", void 0);
    return RecipeAutoCompleteMyRecipesResponse;
}(SpeakeasyBase));
export { RecipeAutoCompleteMyRecipesResponse };
