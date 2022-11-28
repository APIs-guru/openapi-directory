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
var RecipeRecipeSearchQueryParams = /** @class */ (function (_super) {
    __extends(RecipeRecipeSearchQueryParams, _super);
    function RecipeRecipeSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=any_kw" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "anyKw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=boostmine" }),
        __metadata("design:type", Boolean)
    ], RecipeRecipeSearchQueryParams.prototype, "boostmine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=champion" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "champion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chs" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "chs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coll" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "coll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cps" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "cps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cuisine" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=db" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dyf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "dyf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_cat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "excludeCat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_ing" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "excludeIng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_primarycat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "excludePrimarycat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folder" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=glf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "glf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_cat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "includeCat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_ing" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "includeIng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_primarycat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "includePrimarycat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxIngredients" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "maxIngredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minIngredients" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "minIngredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ntf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "ntf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "pg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photos" }),
        __metadata("design:type", Boolean)
    ], RecipeRecipeSearchQueryParams.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rmf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "rmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "rpp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=servingsMin" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "servingsMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sff" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "sff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "slf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synonyms" }),
        __metadata("design:type", Boolean)
    ], RecipeRecipeSearchQueryParams.prototype, "synonyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title_kw" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "titleKw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tnf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "tnf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=totalMins" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "totalMins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userset" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchQueryParams.prototype, "userset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vgn" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "vgn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vtn" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "vtn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wmf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchQueryParams.prototype, "wmf", void 0);
    return RecipeRecipeSearchQueryParams;
}(SpeakeasyBase));
export { RecipeRecipeSearchQueryParams };
var RecipeRecipeSearchRequest = /** @class */ (function (_super) {
    __extends(RecipeRecipeSearchRequest, _super);
    function RecipeRecipeSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeRecipeSearchQueryParams)
    ], RecipeRecipeSearchRequest.prototype, "queryParams", void 0);
    return RecipeRecipeSearchRequest;
}(SpeakeasyBase));
export { RecipeRecipeSearchRequest };
var RecipeRecipeSearchResponse = /** @class */ (function (_super) {
    __extends(RecipeRecipeSearchResponse, _super);
    function RecipeRecipeSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BigOvenModelApi2RecipeSearchResult)
    ], RecipeRecipeSearchResponse.prototype, "bigOvenModelApi2RecipeSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeRecipeSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeRecipeSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchResponse.prototype, "statusCode", void 0);
    return RecipeRecipeSearchResponse;
}(SpeakeasyBase));
export { RecipeRecipeSearchResponse };
