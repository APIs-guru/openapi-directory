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
import { BigOvenModelApiUserInfoInput } from "./bigovenmodelapiuserinfo";
var BigOvenModelApiRecipeInfoInput = /** @class */ (function (_super) {
    __extends(BigOvenModelApiRecipeInfoInput, _super);
    function BigOvenModelApiRecipeInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BookmarkURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "bookmarkUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApiRecipeInfoInput.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cuisine" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasVideos" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInfoInput.prototype, "hasVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HeroPhotoUrl" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "heroPhotoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HideFromPublicSearch" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInfoInput.prototype, "hideFromPublicSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageURL120" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "imageUrl120", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsBookmark" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInfoInput.prototype, "isBookmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrivate" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiRecipeInfoInput.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxImageSquare" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "maxImageSquare", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Microcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "microcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApiUserInfoInput)
    ], BigOvenModelApiRecipeInfoInput.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QualityScore" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "qualityScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRatingIMG" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "starRatingImg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "subcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalTries" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "totalTries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApiRecipeInfoInput.prototype, "webUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=YieldNumber" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiRecipeInfoInput.prototype, "yieldNumber", void 0);
    return BigOvenModelApiRecipeInfoInput;
}(SpeakeasyBase));
export { BigOvenModelApiRecipeInfoInput };
