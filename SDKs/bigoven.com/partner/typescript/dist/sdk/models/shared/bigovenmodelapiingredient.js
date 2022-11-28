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
import { BigOvenModelApiIngredientInfo } from "./bigovenmodelapiingredientinfo";
var BigOvenModelApiIngredient = /** @class */ (function (_super) {
    __extends(BigOvenModelApiIngredient, _super);
    function BigOvenModelApiIngredient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayIndex" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiIngredient.prototype, "displayIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayQuantity" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "displayQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HTMLName" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "htmlName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IngredientID" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiIngredient.prototype, "ingredientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IngredientInfo" }),
        __metadata("design:type", BigOvenModelApiIngredientInfo)
    ], BigOvenModelApiIngredient.prototype, "ingredientInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHeading" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiIngredient.prototype, "isHeading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLinked" }),
        __metadata("design:type", Boolean)
    ], BigOvenModelApiIngredient.prototype, "isLinked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricDisplayQuantity" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "metricDisplayQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricQuantity" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiIngredient.prototype, "metricQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetricUnit" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "metricUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreparationNotes" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "preparationNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Quantity" }),
        __metadata("design:type", Number)
    ], BigOvenModelApiIngredient.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unit" }),
        __metadata("design:type", String)
    ], BigOvenModelApiIngredient.prototype, "unit", void 0);
    return BigOvenModelApiIngredient;
}(SpeakeasyBase));
export { BigOvenModelApiIngredient };
