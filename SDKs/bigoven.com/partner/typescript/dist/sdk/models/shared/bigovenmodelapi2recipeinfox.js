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
import { BigOvenModelApi2UserInfoTinyx } from "./bigovenmodelapi2userinfotinyx";
var BigOvenModelApi2RecipeInfox = /** @class */ (function (_super) {
    __extends(BigOvenModelApi2RecipeInfox, _super);
    function BigOvenModelApi2RecipeInfox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Category" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], BigOvenModelApi2RecipeInfox.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cuisine" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "cuisine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasVideos" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2RecipeInfox.prototype, "hasVideos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsBookmark" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2RecipeInfox.prototype, "isBookmark", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPrivate" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2RecipeInfox.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRecipeScan" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApi2RecipeInfox.prototype, "isRecipeScan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Microcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "microcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PhotoUrl" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Poster" }),
        __metadata("design:type", BigOvenModelApi2UserInfoTinyx)
    ], BigOvenModelApi2RecipeInfox.prototype, "poster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecipeID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2RecipeInfox.prototype, "recipeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewCount" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2RecipeInfox.prototype, "reviewCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Servings" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2RecipeInfox.prototype, "servings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StarRating" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2RecipeInfox.prototype, "starRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subcategory" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "subcategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalTries" }),
        __metadata("design:type", Number)
    ], BigOvenModelApi2RecipeInfox.prototype, "totalTries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WebURL" }),
        __metadata("design:type", String)
    ], BigOvenModelApi2RecipeInfox.prototype, "webUrl", void 0);
    return BigOvenModelApi2RecipeInfox;
}(SpeakeasyBase));
export { BigOvenModelApi2RecipeInfox };
