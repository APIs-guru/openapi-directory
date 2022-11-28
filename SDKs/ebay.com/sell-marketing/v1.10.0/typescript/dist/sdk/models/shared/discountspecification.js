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
// DiscountSpecification
/**
 * This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met. Note: When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the discountSpecification container: minAmount minQuantity forEachQuantity forEachAmount Tip: Refer to Configuring discounts for threshold promotions for information and examples on how to combine discountBenefit and discountSpecification to create different types of promotions.
**/
var DiscountSpecification = /** @class */ (function (_super) {
    __extends(DiscountSpecification, _super);
    function DiscountSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forEachAmount" }),
        __metadata("design:type", Amount)
    ], DiscountSpecification.prototype, "forEachAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forEachQuantity" }),
        __metadata("design:type", Number)
    ], DiscountSpecification.prototype, "forEachQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minAmount" }),
        __metadata("design:type", Amount)
    ], DiscountSpecification.prototype, "minAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minQuantity" }),
        __metadata("design:type", Number)
    ], DiscountSpecification.prototype, "minQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numberOfDiscountedItems" }),
        __metadata("design:type", Number)
    ], DiscountSpecification.prototype, "numberOfDiscountedItems", void 0);
    return DiscountSpecification;
}(SpeakeasyBase));
export { DiscountSpecification };
