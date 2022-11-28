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
var RecipeGetV2PathParams = /** @class */ (function (_super) {
    __extends(RecipeGetV2PathParams, _super);
    function RecipeGetV2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], RecipeGetV2PathParams.prototype, "id", void 0);
    return RecipeGetV2PathParams;
}(SpeakeasyBase));
export { RecipeGetV2PathParams };
var RecipeGetV2QueryParams = /** @class */ (function (_super) {
    __extends(RecipeGetV2QueryParams, _super);
    function RecipeGetV2QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefetch" }),
        __metadata("design:type", Boolean)
    ], RecipeGetV2QueryParams.prototype, "prefetch", void 0);
    return RecipeGetV2QueryParams;
}(SpeakeasyBase));
export { RecipeGetV2QueryParams };
var RecipeGetV2Request = /** @class */ (function (_super) {
    __extends(RecipeGetV2Request, _super);
    function RecipeGetV2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeGetV2PathParams)
    ], RecipeGetV2Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeGetV2QueryParams)
    ], RecipeGetV2Request.prototype, "queryParams", void 0);
    return RecipeGetV2Request;
}(SpeakeasyBase));
export { RecipeGetV2Request };
var RecipeGetV2Response = /** @class */ (function (_super) {
    __extends(RecipeGetV2Response, _super);
    function RecipeGetV2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Api2ModelsRecipesRecipeResponse)
    ], RecipeGetV2Response.prototype, "api2ModelsRecipesRecipeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeGetV2Response.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeGetV2Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeGetV2Response.prototype, "statusCode", void 0);
    return RecipeGetV2Response;
}(SpeakeasyBase));
export { RecipeGetV2Response };
