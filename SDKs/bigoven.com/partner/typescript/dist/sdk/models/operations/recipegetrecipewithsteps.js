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
var RecipeGetRecipeWithStepsPathParams = /** @class */ (function (_super) {
    __extends(RecipeGetRecipeWithStepsPathParams, _super);
    function RecipeGetRecipeWithStepsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], RecipeGetRecipeWithStepsPathParams.prototype, "id", void 0);
    return RecipeGetRecipeWithStepsPathParams;
}(SpeakeasyBase));
export { RecipeGetRecipeWithStepsPathParams };
var RecipeGetRecipeWithStepsQueryParams = /** @class */ (function (_super) {
    __extends(RecipeGetRecipeWithStepsQueryParams, _super);
    function RecipeGetRecipeWithStepsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefetch" }),
        __metadata("design:type", Boolean)
    ], RecipeGetRecipeWithStepsQueryParams.prototype, "prefetch", void 0);
    return RecipeGetRecipeWithStepsQueryParams;
}(SpeakeasyBase));
export { RecipeGetRecipeWithStepsQueryParams };
var RecipeGetRecipeWithStepsRequest = /** @class */ (function (_super) {
    __extends(RecipeGetRecipeWithStepsRequest, _super);
    function RecipeGetRecipeWithStepsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeGetRecipeWithStepsPathParams)
    ], RecipeGetRecipeWithStepsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeGetRecipeWithStepsQueryParams)
    ], RecipeGetRecipeWithStepsRequest.prototype, "queryParams", void 0);
    return RecipeGetRecipeWithStepsRequest;
}(SpeakeasyBase));
export { RecipeGetRecipeWithStepsRequest };
var RecipeGetRecipeWithStepsResponse = /** @class */ (function (_super) {
    __extends(RecipeGetRecipeWithStepsResponse, _super);
    function RecipeGetRecipeWithStepsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BigOvenModelApi2Recipe)
    ], RecipeGetRecipeWithStepsResponse.prototype, "bigOvenModelApi2Recipe", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeGetRecipeWithStepsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeGetRecipeWithStepsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeGetRecipeWithStepsResponse.prototype, "statusCode", void 0);
    return RecipeGetRecipeWithStepsResponse;
}(SpeakeasyBase));
export { RecipeGetRecipeWithStepsResponse };
