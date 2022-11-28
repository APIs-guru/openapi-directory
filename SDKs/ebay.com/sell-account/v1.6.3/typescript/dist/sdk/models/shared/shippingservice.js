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
import { RegionSet } from "./regionset";
// ShippingService
/**
 * A complex type that defines the available shipping services offered in the parent shippingOptions container. The shipping services specified here must be able to accommodate the optionType defined in the parent shippingOption container (either DOMESTIC or INTERNATIONAL). Tip: For more on setting up shipping services, see Setting the shipping carrier and shipping service values.
**/
var ShippingService = /** @class */ (function (_super) {
    __extends(ShippingService, _super);
    function ShippingService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalShippingCost" }),
        __metadata("design:type", Amount)
    ], ShippingService.prototype, "additionalShippingCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerResponsibleForPickup" }),
        __metadata("design:type", Boolean)
    ], ShippingService.prototype, "buyerResponsibleForPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerResponsibleForShipping" }),
        __metadata("design:type", Boolean)
    ], ShippingService.prototype, "buyerResponsibleForShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cashOnDeliveryFee" }),
        __metadata("design:type", Amount)
    ], ShippingService.prototype, "cashOnDeliveryFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeShipping" }),
        __metadata("design:type", Boolean)
    ], ShippingService.prototype, "freeShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipToLocations" }),
        __metadata("design:type", RegionSet)
    ], ShippingService.prototype, "shipToLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" }),
        __metadata("design:type", String)
    ], ShippingService.prototype, "shippingCarrierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCost" }),
        __metadata("design:type", Amount)
    ], ShippingService.prototype, "shippingCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingServiceCode" }),
        __metadata("design:type", String)
    ], ShippingService.prototype, "shippingServiceCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", Number)
    ], ShippingService.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=surcharge" }),
        __metadata("design:type", Amount)
    ], ShippingService.prototype, "surcharge", void 0);
    return ShippingService;
}(SpeakeasyBase));
export { ShippingService };
