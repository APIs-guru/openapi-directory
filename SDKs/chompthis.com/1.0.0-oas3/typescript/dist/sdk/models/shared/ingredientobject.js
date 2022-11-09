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
// IngredientObjectItemsCalorieConversionFactor
/**
 * An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
**/
var IngredientObjectItemsCalorieConversionFactor = /** @class */ (function (_super) {
    __extends(IngredientObjectItemsCalorieConversionFactor, _super);
    function IngredientObjectItemsCalorieConversionFactor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=carbohydrate_value" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsCalorieConversionFactor.prototype, "carbohydrateValue", void 0);
    __decorate([
        Metadata({ data: "json, name=fat_value" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsCalorieConversionFactor.prototype, "fatValue", void 0);
    __decorate([
        Metadata({ data: "json, name=protein_value" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsCalorieConversionFactor.prototype, "proteinValue", void 0);
    return IngredientObjectItemsCalorieConversionFactor;
}(SpeakeasyBase));
export { IngredientObjectItemsCalorieConversionFactor };
// IngredientObjectItemsComponents
/**
 * An object containing information on a specific component of this food item
**/
var IngredientObjectItemsComponents = /** @class */ (function (_super) {
    __extends(IngredientObjectItemsComponents, _super);
    function IngredientObjectItemsComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data_points" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsComponents.prototype, "dataPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=gram_weight" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsComponents.prototype, "gramWeight", void 0);
    __decorate([
        Metadata({ data: "json, name=is_refuse" }),
        __metadata("design:type", Boolean)
    ], IngredientObjectItemsComponents.prototype, "isRefuse", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsComponents.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=pct_weight" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsComponents.prototype, "pctWeight", void 0);
    return IngredientObjectItemsComponents;
}(SpeakeasyBase));
export { IngredientObjectItemsComponents };
// IngredientObjectItemsNutrients
/**
 * An object containing information for a specific nutrient found in this food item
**/
var IngredientObjectItemsNutrients = /** @class */ (function (_super) {
    __extends(IngredientObjectItemsNutrients, _super);
    function IngredientObjectItemsNutrients() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data_points" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsNutrients.prototype, "dataPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsNutrients.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=footnote" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsNutrients.prototype, "footnote", void 0);
    __decorate([
        Metadata({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsNutrients.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "json, name=measurement_unit" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsNutrients.prototype, "measurementUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=median" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsNutrients.prototype, "median", void 0);
    __decorate([
        Metadata({ data: "json, name=min" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsNutrients.prototype, "min", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsNutrients.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=per_100g" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsNutrients.prototype, "per100g", void 0);
    __decorate([
        Metadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsNutrients.prototype, "rank", void 0);
    return IngredientObjectItemsNutrients;
}(SpeakeasyBase));
export { IngredientObjectItemsNutrients };
// IngredientObjectItemsPortions
/**
 * An object containing information on a specific food portion found in this item
**/
var IngredientObjectItemsPortions = /** @class */ (function (_super) {
    __extends(IngredientObjectItemsPortions, _super);
    function IngredientObjectItemsPortions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=data_points" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsPortions.prototype, "dataPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsPortions.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=footnote" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsPortions.prototype, "footnote", void 0);
    __decorate([
        Metadata({ data: "json, name=gram_weight" }),
        __metadata("design:type", Number)
    ], IngredientObjectItemsPortions.prototype, "gramWeight", void 0);
    __decorate([
        Metadata({ data: "json, name=measurement_unit" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsPortions.prototype, "measurementUnit", void 0);
    __decorate([
        Metadata({ data: "json, name=modifier" }),
        __metadata("design:type", String)
    ], IngredientObjectItemsPortions.prototype, "modifier", void 0);
    return IngredientObjectItemsPortions;
}(SpeakeasyBase));
export { IngredientObjectItemsPortions };
// IngredientObjectItems
/**
 * An object containing information for this specific item.
**/
var IngredientObjectItems = /** @class */ (function (_super) {
    __extends(IngredientObjectItems, _super);
    function IngredientObjectItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=calorie_conversion_factor" }),
        __metadata("design:type", IngredientObjectItemsCalorieConversionFactor)
    ], IngredientObjectItems.prototype, "calorieConversionFactor", void 0);
    __decorate([
        Metadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], IngredientObjectItems.prototype, "categories", void 0);
    __decorate([
        Metadata({ data: "json, name=common_name" }),
        __metadata("design:type", String)
    ], IngredientObjectItems.prototype, "commonName", void 0);
    __decorate([
        Metadata({ data: "json, name=components", elemType: shared.IngredientObjectItemsComponents }),
        __metadata("design:type", Array)
    ], IngredientObjectItems.prototype, "components", void 0);
    __decorate([
        Metadata({ data: "json, name=footnote" }),
        __metadata("design:type", String)
    ], IngredientObjectItems.prototype, "footnote", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], IngredientObjectItems.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nutrients", elemType: shared.IngredientObjectItemsNutrients }),
        __metadata("design:type", Array)
    ], IngredientObjectItems.prototype, "nutrients", void 0);
    __decorate([
        Metadata({ data: "json, name=portions", elemType: shared.IngredientObjectItemsPortions }),
        __metadata("design:type", Array)
    ], IngredientObjectItems.prototype, "portions", void 0);
    __decorate([
        Metadata({ data: "json, name=protein_conversion_factor" }),
        __metadata("design:type", Number)
    ], IngredientObjectItems.prototype, "proteinConversionFactor", void 0);
    __decorate([
        Metadata({ data: "json, name=score" }),
        __metadata("design:type", String)
    ], IngredientObjectItems.prototype, "score", void 0);
    __decorate([
        Metadata({ data: "json, name=search_term" }),
        __metadata("design:type", String)
    ], IngredientObjectItems.prototype, "searchTerm", void 0);
    return IngredientObjectItems;
}(SpeakeasyBase));
export { IngredientObjectItems };
// IngredientObject
/**
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
**/
var IngredientObject = /** @class */ (function (_super) {
    __extends(IngredientObject, _super);
    function IngredientObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=items", elemType: shared.IngredientObjectItems }),
        __metadata("design:type", Array)
    ], IngredientObject.prototype, "items", void 0);
    return IngredientObject;
}(SpeakeasyBase));
export { IngredientObject };
