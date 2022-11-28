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
import { AdditionalOption } from "./additionaloption";
import { Amount } from "./amount";
// PurchasedRate
/**
 * The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
**/
var PurchasedRate = /** @class */ (function (_super) {
    __extends(PurchasedRate, _super);
    function PurchasedRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalOptions", elemType: AdditionalOption }),
        __metadata("design:type", Array)
    ], PurchasedRate.prototype, "additionalOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseShippingCost" }),
        __metadata("design:type", Amount)
    ], PurchasedRate.prototype, "baseShippingCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationTimeZone" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "destinationTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxEstimatedDeliveryDate" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "maxEstimatedDeliveryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minEstimatedDeliveryDate" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "minEstimatedDeliveryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupNetworks" }),
        __metadata("design:type", Array)
    ], PurchasedRate.prototype, "pickupNetworks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupSlotId" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "pickupSlotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupType" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "pickupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateId" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "rateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCarrierCode" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "shippingCarrierCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCarrierName" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "shippingCarrierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingQuoteId" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "shippingQuoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingServiceCode" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "shippingServiceCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingServiceName" }),
        __metadata("design:type", String)
    ], PurchasedRate.prototype, "shippingServiceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalShippingCost" }),
        __metadata("design:type", Amount)
    ], PurchasedRate.prototype, "totalShippingCost", void 0);
    return PurchasedRate;
}(SpeakeasyBase));
export { PurchasedRate };
