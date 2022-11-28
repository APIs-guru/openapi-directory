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
import { ShippingService } from "./shippingservice";
// ShippingOption
/**
 * This complex type defines a seller's shipping configuration for either a DOMESTIC or INTERNATIONAL shipping option. Shipping options configure the high-level settings for shipments, such as flat-rate or calculated shipping, and any rate tables the seller wants to associate with the policy. Each shippingOption element has a shippingServices container that defines the list of shipping carriers and services that are available for the parent shipping option (that is, for either DOMESTIC or INTERNATIONAL shipping). If a seller offers an international shipping option, they must also offer a domestic shipping option. Note that costType (FLAT_RATE or CALCULATED) is set in shippingOptions and that all associated shipping services must be able to support this cost type.
**/
var ShippingOption = /** @class */ (function (_super) {
    __extends(ShippingOption, _super);
    function ShippingOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costType" }),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "costType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insuranceFee" }),
        __metadata("design:type", Amount)
    ], ShippingOption.prototype, "insuranceFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insuranceOffered" }),
        __metadata("design:type", Boolean)
    ], ShippingOption.prototype, "insuranceOffered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optionType" }),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "optionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageHandlingCost" }),
        __metadata("design:type", Amount)
    ], ShippingOption.prototype, "packageHandlingCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateTableId" }),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "rateTableId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingServices", elemType: ShippingService }),
        __metadata("design:type", Array)
    ], ShippingOption.prototype, "shippingServices", void 0);
    return ShippingOption;
}(SpeakeasyBase));
export { ShippingOption };
