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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
// BrandedFoodObjectItemsCountryDetails
/**
 * An object containing additional information on the countries where this item is found
**/
var BrandedFoodObjectItemsCountryDetails = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsCountryDetails, _super);
    function BrandedFoodObjectItemsCountryDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=english_speaking" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsCountryDetails.prototype, "englishSpeaking", void 0);
    __decorate([
        Metadata({ data: "json, name=non_english_speaking" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsCountryDetails.prototype, "nonEnglishSpeaking", void 0);
    return BrandedFoodObjectItemsCountryDetails;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsCountryDetails };
// BrandedFoodObjectItemsDietFlags
/**
 * An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
**/
var BrandedFoodObjectItemsDietFlags = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsDietFlags, _super);
    function BrandedFoodObjectItemsDietFlags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=compatibility_description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietFlags.prototype, "compatibilityDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=compatibility_level" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietFlags.prototype, "compatibilityLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=diet_label" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietFlags.prototype, "dietLabel", void 0);
    __decorate([
        Metadata({ data: "json, name=ingredient" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietFlags.prototype, "ingredient", void 0);
    __decorate([
        Metadata({ data: "json, name=ingredient_description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietFlags.prototype, "ingredientDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=is_allergen" }),
        __metadata("design:type", Boolean)
    ], BrandedFoodObjectItemsDietFlags.prototype, "isAllergen", void 0);
    __decorate([
        Metadata({ data: "json, name=is_compatible" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietFlags.prototype, "isCompatible", void 0);
    return BrandedFoodObjectItemsDietFlags;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsDietFlags };
// BrandedFoodObjectItemsDietLabelsGlutenFree
/**
 * An object containing information on this item's compatibility with Gluten Free diets
**/
var BrandedFoodObjectItemsDietLabelsGlutenFree = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsDietLabelsGlutenFree, _super);
    function BrandedFoodObjectItemsDietLabelsGlutenFree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=compatibility_level" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietLabelsGlutenFree.prototype, "compatibilityLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietLabelsGlutenFree.prototype, "confidence", void 0);
    __decorate([
        Metadata({ data: "json, name=confidence_description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietLabelsGlutenFree.prototype, "confidenceDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=is_compatible" }),
        __metadata("design:type", Boolean)
    ], BrandedFoodObjectItemsDietLabelsGlutenFree.prototype, "isCompatible", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietLabelsGlutenFree.prototype, "name", void 0);
    return BrandedFoodObjectItemsDietLabelsGlutenFree;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsDietLabelsGlutenFree };
// BrandedFoodObjectItemsDietLabelsVegan
/**
 * An object containing information on this item's compatibility with the Vegan diets
**/
var BrandedFoodObjectItemsDietLabelsVegan = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsDietLabelsVegan, _super);
    function BrandedFoodObjectItemsDietLabelsVegan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=compatibility_level" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietLabelsVegan.prototype, "compatibilityLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietLabelsVegan.prototype, "confidence", void 0);
    __decorate([
        Metadata({ data: "json, name=confidence_description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietLabelsVegan.prototype, "confidenceDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=is_compatible" }),
        __metadata("design:type", Boolean)
    ], BrandedFoodObjectItemsDietLabelsVegan.prototype, "isCompatible", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietLabelsVegan.prototype, "name", void 0);
    return BrandedFoodObjectItemsDietLabelsVegan;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsDietLabelsVegan };
// BrandedFoodObjectItemsDietLabelsVegetarian
/**
 * An object containing information on this item's compatibility with Vegetarian diets
**/
var BrandedFoodObjectItemsDietLabelsVegetarian = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsDietLabelsVegetarian, _super);
    function BrandedFoodObjectItemsDietLabelsVegetarian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=compatibility_level" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietLabelsVegetarian.prototype, "compatibilityLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=confidence" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsDietLabelsVegetarian.prototype, "confidence", void 0);
    __decorate([
        Metadata({ data: "json, name=confidence_description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietLabelsVegetarian.prototype, "confidenceDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=is_compatible" }),
        __metadata("design:type", Boolean)
    ], BrandedFoodObjectItemsDietLabelsVegetarian.prototype, "isCompatible", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsDietLabelsVegetarian.prototype, "name", void 0);
    return BrandedFoodObjectItemsDietLabelsVegetarian;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsDietLabelsVegetarian };
// BrandedFoodObjectItemsDietLabels
/**
 * An object containing this item's compatibility grades for each supported diet
**/
var BrandedFoodObjectItemsDietLabels = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsDietLabels, _super);
    function BrandedFoodObjectItemsDietLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=gluten_free" }),
        __metadata("design:type", BrandedFoodObjectItemsDietLabelsGlutenFree)
    ], BrandedFoodObjectItemsDietLabels.prototype, "glutenFree", void 0);
    __decorate([
        Metadata({ data: "json, name=vegan" }),
        __metadata("design:type", BrandedFoodObjectItemsDietLabelsVegan)
    ], BrandedFoodObjectItemsDietLabels.prototype, "vegan", void 0);
    __decorate([
        Metadata({ data: "json, name=vegetarian" }),
        __metadata("design:type", BrandedFoodObjectItemsDietLabelsVegetarian)
    ], BrandedFoodObjectItemsDietLabels.prototype, "vegetarian", void 0);
    return BrandedFoodObjectItemsDietLabels;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsDietLabels };
// BrandedFoodObjectItemsNutrients
/**
 * An object containing information for a specific nutrient found in this food item
**/
var BrandedFoodObjectItemsNutrients = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsNutrients, _super);
    function BrandedFoodObjectItemsNutrients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data_points" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsNutrients.prototype, "dataPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsNutrients.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=measurement_unit" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsNutrients.prototype, "measurementUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsNutrients.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=per_100g" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsNutrients.prototype, "per100g", void 0);
    __decorate([
        Metadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsNutrients.prototype, "rank", void 0);
    return BrandedFoodObjectItemsNutrients;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsNutrients };
// BrandedFoodObjectItemsPackage
/**
 * An object containing basic packaging information about this item
**/
var BrandedFoodObjectItemsPackage = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsPackage, _super);
    function BrandedFoodObjectItemsPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], BrandedFoodObjectItemsPackage.prototype, "quantity", void 0);
    __decorate([
        Metadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackage.prototype, "size", void 0);
    return BrandedFoodObjectItemsPackage;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsPackage };
// BrandedFoodObjectItemsPackagingPhotosFront
/**
 * An object containing photos of the front of this item's packaging
**/
var BrandedFoodObjectItemsPackagingPhotosFront = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsPackagingPhotosFront, _super);
    function BrandedFoodObjectItemsPackagingPhotosFront() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosFront.prototype, "display", void 0);
    __decorate([
        Metadata({ data: "json, name=small" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosFront.prototype, "small", void 0);
    __decorate([
        Metadata({ data: "json, name=thumb" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosFront.prototype, "thumb", void 0);
    return BrandedFoodObjectItemsPackagingPhotosFront;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsPackagingPhotosFront };
// BrandedFoodObjectItemsPackagingPhotosIngredients
/**
 * An object containing photos of the ingredients on this item's packaging
**/
var BrandedFoodObjectItemsPackagingPhotosIngredients = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsPackagingPhotosIngredients, _super);
    function BrandedFoodObjectItemsPackagingPhotosIngredients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosIngredients.prototype, "display", void 0);
    __decorate([
        Metadata({ data: "json, name=small" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosIngredients.prototype, "small", void 0);
    __decorate([
        Metadata({ data: "json, name=thumb" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosIngredients.prototype, "thumb", void 0);
    return BrandedFoodObjectItemsPackagingPhotosIngredients;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsPackagingPhotosIngredients };
// BrandedFoodObjectItemsPackagingPhotosNutrition
/**
 * An object containing photos of this item's nutrition label
**/
var BrandedFoodObjectItemsPackagingPhotosNutrition = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsPackagingPhotosNutrition, _super);
    function BrandedFoodObjectItemsPackagingPhotosNutrition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=display" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosNutrition.prototype, "display", void 0);
    __decorate([
        Metadata({ data: "json, name=small" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosNutrition.prototype, "small", void 0);
    __decorate([
        Metadata({ data: "json, name=thumb" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsPackagingPhotosNutrition.prototype, "thumb", void 0);
    return BrandedFoodObjectItemsPackagingPhotosNutrition;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsPackagingPhotosNutrition };
// BrandedFoodObjectItemsPackagingPhotos
/**
 * A object containing a collection of photos of this item's packaging
**/
var BrandedFoodObjectItemsPackagingPhotos = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsPackagingPhotos, _super);
    function BrandedFoodObjectItemsPackagingPhotos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=front" }),
        __metadata("design:type", BrandedFoodObjectItemsPackagingPhotosFront)
    ], BrandedFoodObjectItemsPackagingPhotos.prototype, "front", void 0);
    __decorate([
        Metadata({ data: "json, name=ingredients" }),
        __metadata("design:type", BrandedFoodObjectItemsPackagingPhotosIngredients)
    ], BrandedFoodObjectItemsPackagingPhotos.prototype, "ingredients", void 0);
    __decorate([
        Metadata({ data: "json, name=nutrition" }),
        __metadata("design:type", BrandedFoodObjectItemsPackagingPhotosNutrition)
    ], BrandedFoodObjectItemsPackagingPhotos.prototype, "nutrition", void 0);
    return BrandedFoodObjectItemsPackagingPhotos;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsPackagingPhotos };
// BrandedFoodObjectItemsServing
/**
 * An object containing serving information for this item
**/
var BrandedFoodObjectItemsServing = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItemsServing, _super);
    function BrandedFoodObjectItemsServing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=measurement_unit" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsServing.prototype, "measurementUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsServing.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "json, name=size_fulltext" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItemsServing.prototype, "sizeFulltext", void 0);
    return BrandedFoodObjectItemsServing;
}(SpeakeasyBase));
export { BrandedFoodObjectItemsServing };
// BrandedFoodObjectItems
/**
 * An object containing information for this specific item.
**/
var BrandedFoodObjectItems = /** @class */ (function (_super) {
    __extends(BrandedFoodObjectItems, _super);
    function BrandedFoodObjectItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allergens" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "allergens", void 0);
    __decorate([
        Metadata({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItems.prototype, "barcode", void 0);
    __decorate([
        Metadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItems.prototype, "brand", void 0);
    __decorate([
        Metadata({ data: "json, name=brand_list" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "brandList", void 0);
    __decorate([
        Metadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "categories", void 0);
    __decorate([
        Metadata({ data: "json, name=countries" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "countries", void 0);
    __decorate([
        Metadata({ data: "json, name=country_details" }),
        __metadata("design:type", BrandedFoodObjectItemsCountryDetails)
    ], BrandedFoodObjectItems.prototype, "countryDetails", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItems.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=diet_flags", elemType: shared.BrandedFoodObjectItemsDietFlags }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "dietFlags", void 0);
    __decorate([
        Metadata({ data: "json, name=diet_labels" }),
        __metadata("design:type", BrandedFoodObjectItemsDietLabels)
    ], BrandedFoodObjectItems.prototype, "dietLabels", void 0);
    __decorate([
        Metadata({ data: "json, name=has_english_ingredients" }),
        __metadata("design:type", Boolean)
    ], BrandedFoodObjectItems.prototype, "hasEnglishIngredients", void 0);
    __decorate([
        Metadata({ data: "json, name=ingredient_list" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "ingredientList", void 0);
    __decorate([
        Metadata({ data: "json, name=ingredients" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItems.prototype, "ingredients", void 0);
    __decorate([
        Metadata({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "keywords", void 0);
    __decorate([
        Metadata({ data: "json, name=minerals" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "minerals", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BrandedFoodObjectItems.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nutrients", elemType: shared.BrandedFoodObjectItemsNutrients }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "nutrients", void 0);
    __decorate([
        Metadata({ data: "json, name=package" }),
        __metadata("design:type", BrandedFoodObjectItemsPackage)
    ], BrandedFoodObjectItems.prototype, "package", void 0);
    __decorate([
        Metadata({ data: "json, name=packaging_photos" }),
        __metadata("design:type", BrandedFoodObjectItemsPackagingPhotos)
    ], BrandedFoodObjectItems.prototype, "packagingPhotos", void 0);
    __decorate([
        Metadata({ data: "json, name=palm_oil_ingredients" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "palmOilIngredients", void 0);
    __decorate([
        Metadata({ data: "json, name=serving" }),
        __metadata("design:type", BrandedFoodObjectItemsServing)
    ], BrandedFoodObjectItems.prototype, "serving", void 0);
    __decorate([
        Metadata({ data: "json, name=traces" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "traces", void 0);
    __decorate([
        Metadata({ data: "json, name=vitamins" }),
        __metadata("design:type", Array)
    ], BrandedFoodObjectItems.prototype, "vitamins", void 0);
    return BrandedFoodObjectItems;
}(SpeakeasyBase));
export { BrandedFoodObjectItems };
// BrandedFoodObject
/**
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
var BrandedFoodObject = /** @class */ (function (_super) {
    __extends(BrandedFoodObject, _super);
    function BrandedFoodObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=items", elemType: shared.BrandedFoodObjectItems }),
        __metadata("design:type", Array)
    ], BrandedFoodObject.prototype, "items", void 0);
    return BrandedFoodObject;
}(SpeakeasyBase));
export { BrandedFoodObject };
