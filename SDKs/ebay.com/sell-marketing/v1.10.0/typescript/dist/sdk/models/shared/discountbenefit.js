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
import { Amount } from "./amount";
// DiscountBenefit
/**
 * This container defines the promotional discount as either a monetary amount or a percentage of the sales price. Important!: You must populate one and only one of the fields in this container: amountOffItem amountOffOrder percentageOffItem percentageOffOrder Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification values to create different types of promotions.
**/
var DiscountBenefit = /** @class */ (function (_super) {
    __extends(DiscountBenefit, _super);
    function DiscountBenefit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountOffItem" }),
        __metadata("design:type", Amount)
    ], DiscountBenefit.prototype, "amountOffItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountOffOrder" }),
        __metadata("design:type", Amount)
    ], DiscountBenefit.prototype, "amountOffOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentageOffItem" }),
        __metadata("design:type", String)
    ], DiscountBenefit.prototype, "percentageOffItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentageOffOrder" }),
        __metadata("design:type", String)
    ], DiscountBenefit.prototype, "percentageOffOrder", void 0);
    return DiscountBenefit;
}(SpeakeasyBase));
export { DiscountBenefit };
