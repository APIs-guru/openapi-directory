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
import { Api2ModelsRecipesRecipeVideoResponse } from "./api2modelsrecipesrecipevideoresponse";
// Api2ModelsRecipesRecipeResponse
/**
 * DTO used to return a recipe with videos
**/
var Api2ModelsRecipesRecipeResponse = /** @class */ (function (_super) {
    __extends(Api2ModelsRecipesRecipeResponse, _super);
    function Api2ModelsRecipesRecipeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActiveMinutes" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "activeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdTags" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "adTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminBoost" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "adminBoost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllCategoriesText" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "allCategoriesText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkImageURL" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "bookmarkImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkSiteLogo" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "bookmarkSiteLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkURL" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "bookmarkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Collection" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CollectionID" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], Api2ModelsRecipesRecipeResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cuisine" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FavoriteCount" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "favoriteCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSquares" }),
        __metadata("design:type", Array)
    ], Api2ModelsRecipesRecipeResponse.prototype, "imageSquares", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ingredients", elemType: BigOvenModelApiIngredient }),
        __metadata("design:type", Array)
    ], Api2ModelsRecipesRecipeResponse.prototype, "ingredients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IngredientsTextBlock" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "ingredientsTextBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Instructions" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsBookmark" }),
        __metadata("design:type", Boolean)
    ], Api2ModelsRecipesRecipeResponse.prototype, "isBookmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrivate" }),
        __metadata("design:type", Boolean)
    ], Api2ModelsRecipesRecipeResponse.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRecipeScan" }),
        __metadata("design:type", Boolean)
    ], Api2ModelsRecipesRecipeResponse.prototype, "isRecipeScan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsSponsored" }),
        __metadata("design:type", Boolean)
    ], Api2ModelsRecipesRecipeResponse.prototype, "isSponsored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModified" }),
        __metadata("design:type", Date)
    ], Api2ModelsRecipesRecipeResponse.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxImageSquare" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "maxImageSquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MedalCount" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "medalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MenuCount" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "menuCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Microcategory" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "microcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotesCount" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "notesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NutritionInfo" }),
        __metadata("design:type", BigOvenModelApiNutritionInfo)
    ], Api2ModelsRecipesRecipeResponse.prototype, "nutritionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhotoUrl" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfo)
    ], Api2ModelsRecipesRecipeResponse.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrimaryIngredient" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "primaryIngredient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewCount" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Steps", elemType: BigOvenModelInstructionStep }),
        __metadata("design:type", Array)
    ], Api2ModelsRecipesRecipeResponse.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subcategory" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "subcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalMinutes" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "totalMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VariantOfRecipeID" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "variantOfRecipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedByClass" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "verifiedByClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerifiedDateTime" }),
        __metadata("design:type", Date)
    ], Api2ModelsRecipesRecipeResponse.prototype, "verifiedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Videos", elemType: Api2ModelsRecipesRecipeVideoResponse }),
        __metadata("design:type", Array)
    ], Api2ModelsRecipesRecipeResponse.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebURL" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "webUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldNumber" }),
        __metadata("design:type", Number)
    ], Api2ModelsRecipesRecipeResponse.prototype, "yieldNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldUnit" }),
        __metadata("design:type", String)
    ], Api2ModelsRecipesRecipeResponse.prototype, "yieldUnit", void 0);
    return Api2ModelsRecipesRecipeResponse;
}(SpeakeasyBase));
export { Api2ModelsRecipesRecipeResponse };
