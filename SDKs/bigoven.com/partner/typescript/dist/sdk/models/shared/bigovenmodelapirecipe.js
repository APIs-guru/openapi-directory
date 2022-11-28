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
import { BigOvenModelApiUserInfoInput } from "./bigovenmodelapiuserinfo";
var BigOvenModelApiRecipe = /** @class */ (function (_super) {
    __extends(BigOvenModelApiRecipe, _super);
    function BigOvenModelApiRecipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "activeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdTags" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "adTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminBoost" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "adminBoost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllCategoriesText" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "allCategoriesText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "bookmarkImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkSiteLogo" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "bookmarkSiteLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "bookmarkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Collection" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipe.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cuisine" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FavoriteCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "favoriteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HeroPhotoUrl" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "heroPhotoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSquares" }),
        __metadata("design:type", Array)
    ], BigOvenModelApiRecipe.prototype, "imageSquares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ingredients", elemType: BigOvenModelApiIngredient }),
        __metadata("design:type", Array)
    ], BigOvenModelApiRecipe.prototype, "ingredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IngredientsTextBlock" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "ingredientsTextBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instructions" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsBookmark" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipe.prototype, "isBookmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrivate" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipe.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRecipeScan" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipe.prototype, "isRecipeScan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSponsored" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipe.prototype, "isSponsored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipe.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxImageSquare" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "maxImageSquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MedalCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "medalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MenuCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "menuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Microcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "microcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotesCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "notesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NutritionInfo" }),
        __metadata("design:type", BigOvenModelApiNutritionInfo)
    ], BigOvenModelApiRecipe.prototype, "nutritionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfo)
    ], BigOvenModelApiRecipe.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryIngredient" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "primaryIngredient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "subcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "totalMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VariantOfRecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "variantOfRecipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedByClass" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "verifiedByClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedDateTime" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipe.prototype, "verifiedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "webUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldNumber" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipe.prototype, "yieldNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldUnit" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipe.prototype, "yieldUnit", void 0);
    return BigOvenModelApiRecipe;
}(SpeakeasyBase));
export { BigOvenModelApiRecipe };
var BigOvenModelApiRecipeInput = /** @class */ (function (_super) {
    __extends(BigOvenModelApiRecipeInput, _super);
    function BigOvenModelApiRecipeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "activeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdTags" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "adTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminBoost" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "adminBoost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllCategoriesText" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "allCategoriesText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "bookmarkImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkSiteLogo" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "bookmarkSiteLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "bookmarkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Collection" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipeInput.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cuisine" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FavoriteCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "favoriteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HeroPhotoUrl" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "heroPhotoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSquares" }),
        __metadata("design:type", Array)
    ], BigOvenModelApiRecipeInput.prototype, "imageSquares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ingredients", elemType: BigOvenModelApiIngredient }),
        __metadata("design:type", Array)
    ], BigOvenModelApiRecipeInput.prototype, "ingredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IngredientsTextBlock" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "ingredientsTextBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instructions" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsBookmark" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInput.prototype, "isBookmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrivate" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInput.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRecipeScan" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInput.prototype, "isRecipeScan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSponsored" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInput.prototype, "isSponsored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipeInput.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxImageSquare" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "maxImageSquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MedalCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "medalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MenuCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "menuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Microcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "microcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotesCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "notesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NutritionInfo" }),
        __metadata("design:type", BigOvenModelApiNutritionInfo)
    ], BigOvenModelApiRecipeInput.prototype, "nutritionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfoInput)
    ], BigOvenModelApiRecipeInput.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryIngredient" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "primaryIngredient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "subcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMinutes" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "totalMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VariantOfRecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "variantOfRecipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedByClass" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "verifiedByClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedDateTime" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipeInput.prototype, "verifiedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "webUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldNumber" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInput.prototype, "yieldNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldUnit" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInput.prototype, "yieldUnit", void 0);
    return BigOvenModelApiRecipeInput;
}(SpeakeasyBase));
export { BigOvenModelApiRecipeInput };
