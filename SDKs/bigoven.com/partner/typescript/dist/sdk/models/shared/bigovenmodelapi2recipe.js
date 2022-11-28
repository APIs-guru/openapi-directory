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
import { BigOvenModelApiIngredient } from "./bigovenmodelapiingredient";
import { BigOvenModelApiNutritionInfo } from "./bigovenmodelapinutritioninfo";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";
import { BigOvenModelInstructionStep } from "./bigovenmodelinstructionstep";
var BigOvenModelApi2Recipe = /** @class */ (function (_super) {
    __extends(BigOvenModelApi2Recipe, _super);
    function BigOvenModelApi2Recipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "activeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdTags" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "adTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminBoost" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "adminBoost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllCategoriesText" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "allCategoriesText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "bookmarkImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkSiteLogo" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "bookmarkSiteLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "bookmarkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Collection" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApi2Recipe.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cuisine" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FavoriteCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "favoriteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSquares" }),
        __metadata("design:type", Array)
    ], BigOvenModelApi2Recipe.prototype, "imageSquares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ingredients", elemType: BigOvenModelApiIngredient }),
        __metadata("design:type", Array)
    ], BigOvenModelApi2Recipe.prototype, "ingredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IngredientsTextBlock" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "ingredientsTextBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instructions" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsBookmark" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2Recipe.prototype, "isBookmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrivate" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2Recipe.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRecipeScan" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2Recipe.prototype, "isRecipeScan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSponsored" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2Recipe.prototype, "isSponsored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], BigOvenModelApi2Recipe.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxImageSquare" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "maxImageSquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MedalCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "medalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MenuCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "menuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Microcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "microcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotesCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "notesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NutritionInfo" }),
        __metadata("design:type", BigOvenModelApiNutritionInfo)
    ], BigOvenModelApi2Recipe.prototype, "nutritionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhotoUrl" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfo)
    ], BigOvenModelApi2Recipe.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryIngredient" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "primaryIngredient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Steps", elemType: BigOvenModelInstructionStep }),
        __metadata("design:type", Array)
    ], BigOvenModelApi2Recipe.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "subcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "totalMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VariantOfRecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "variantOfRecipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedByClass" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "verifiedByClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedDateTime" }),
        __metadata("design:type", Date)
    ], BigOvenModelApi2Recipe.prototype, "verifiedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "webUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldNumber" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2Recipe.prototype, "yieldNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldUnit" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2Recipe.prototype, "yieldUnit", void 0);
    return BigOvenModelApi2Recipe;
}(SpeakeasyBase));
export { BigOvenModelApi2Recipe };
