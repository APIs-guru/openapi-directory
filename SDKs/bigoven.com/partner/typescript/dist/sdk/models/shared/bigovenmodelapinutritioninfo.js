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
var BigOvenModelApiNutritionInfo = /** @class */ (function (_super) {
    __extends(BigOvenModelApiNutritionInfo, _super);
    function BigOvenModelApiNutritionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CaloriesFromFat" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "caloriesFromFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Cholesterol" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "cholesterol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CholesterolPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "cholesterolPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DietaryFiber" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "dietaryFiber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DietaryFiberPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "dietaryFiberPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonoFat" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "monoFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PolyFat" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "polyFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Potassium" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "potassium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PotassiumPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "potassiumPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protein" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "protein", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProteinPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "proteinPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SatFat" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "satFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SatFatPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "satFatPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingularYieldUnit" }),
        __metadata("design:type", String)
    ], BigOvenModelApiNutritionInfo.prototype, "singularYieldUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sodium" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "sodium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SodiumPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "sodiumPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sugar" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "sugar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCalories" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "totalCalories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCarbs" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "totalCarbs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCarbsPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "totalCarbsPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalFat" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "totalFat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalFatPct" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "totalFatPct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransFat" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiNutritionInfo.prototype, "transFat", void 0);
    return BigOvenModelApiNutritionInfo;
}(SpeakeasyBase));
export { BigOvenModelApiNutritionInfo };
