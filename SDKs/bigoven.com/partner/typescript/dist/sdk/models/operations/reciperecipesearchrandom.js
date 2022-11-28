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
var RecipeRecipeSearchRandomQueryParams = /** @class */ (function (_super) {
    __extends(RecipeRecipeSearchRandomQueryParams, _super);
    function RecipeRecipeSearchRandomQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=any_kw" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "anyKw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=boostmine" }),
        __metadata("design:type", Boolean)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "boostmine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=champion" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "champion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chs" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "chs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=coll" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "coll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cps" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "cps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cuisine" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=db" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dyf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "dyf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_cat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "excludeCat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_ing" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "excludeIng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_primarycat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "excludePrimarycat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=folder" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=glf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "glf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_cat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "includeCat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_ing" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "includeIng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_primarycat" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "includePrimarycat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxIngredients" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "maxIngredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minIngredients" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "minIngredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ntf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "ntf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photos" }),
        __metadata("design:type", Boolean)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rmf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "rmf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=servingsMin" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "servingsMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sff" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "sff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "slf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synonyms" }),
        __metadata("design:type", Boolean)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "synonyms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title_kw" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "titleKw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tnf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "tnf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "token", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=totalMins" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "totalMins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userset" }),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "userset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vgn" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "vgn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vtn" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "vtn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wmf" }),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomQueryParams.prototype, "wmf", void 0);
    return RecipeRecipeSearchRandomQueryParams;
}(SpeakeasyBase));
export { RecipeRecipeSearchRandomQueryParams };
var RecipeRecipeSearchRandomRequest = /** @class */ (function (_super) {
    __extends(RecipeRecipeSearchRandomRequest, _super);
    function RecipeRecipeSearchRandomRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecipeRecipeSearchRandomQueryParams)
    ], RecipeRecipeSearchRandomRequest.prototype, "queryParams", void 0);
    return RecipeRecipeSearchRandomRequest;
}(SpeakeasyBase));
export { RecipeRecipeSearchRandomRequest };
var RecipeRecipeSearchRandomResponse = /** @class */ (function (_super) {
    __extends(RecipeRecipeSearchRandomResponse, _super);
    function RecipeRecipeSearchRandomResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BigOvenModelApi2RecipeSearchResult)
    ], RecipeRecipeSearchRandomResponse.prototype, "bigOvenModelApi2RecipeSearchResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], RecipeRecipeSearchRandomResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecipeRecipeSearchRandomResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecipeRecipeSearchRandomResponse.prototype, "statusCode", void 0);
    return RecipeRecipeSearchRandomResponse;
}(SpeakeasyBase));
export { RecipeRecipeSearchRandomResponse };
