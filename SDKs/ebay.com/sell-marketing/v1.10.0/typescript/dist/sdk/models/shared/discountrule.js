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
import { DiscountBenefit } from "./discountbenefit";
import { DiscountSpecification } from "./discountspecification";
import { Amount } from "./amount";
// DiscountRule
/**
 * This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. Set the amount of the discount and the rules that govern when the discount triggers using the discountBenefit and discountSpecification fields. Note: In volume pricing promotions, you must configure at least two discountRule containers and at most four.
**/
var DiscountRule = /** @class */ (function (_super) {
    __extends(DiscountRule, _super);
    function DiscountRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discountBenefit" }),
        __metadata("design:type", DiscountBenefit)
    ], DiscountRule.prototype, "discountBenefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discountSpecification" }),
        __metadata("design:type", DiscountSpecification)
    ], DiscountRule.prototype, "discountSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDiscountAmount" }),
        __metadata("design:type", Amount)
    ], DiscountRule.prototype, "maxDiscountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleOrder" }),
        __metadata("design:type", Number)
    ], DiscountRule.prototype, "ruleOrder", void 0);
    return DiscountRule;
}(SpeakeasyBase));
export { DiscountRule };
