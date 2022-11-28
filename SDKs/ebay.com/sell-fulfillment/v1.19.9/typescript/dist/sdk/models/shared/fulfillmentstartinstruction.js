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
import { Address } from "./address";
import { PickupStep } from "./pickupstep";
import { ShippingStep } from "./shippingstep";
// FulfillmentStartInstruction
/**
 * This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
**/
var FulfillmentStartInstruction = /** @class */ (function (_super) {
    __extends(FulfillmentStartInstruction, _super);
    function FulfillmentStartInstruction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebaySupportedFulfillment" }),
        __metadata("design:type", Boolean)
    ], FulfillmentStartInstruction.prototype, "ebaySupportedFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalDestinationAddress" }),
        __metadata("design:type", Address)
    ], FulfillmentStartInstruction.prototype, "finalDestinationAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInstructionsType" }),
        __metadata("design:type", String)
    ], FulfillmentStartInstruction.prototype, "fulfillmentInstructionsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxEstimatedDeliveryDate" }),
        __metadata("design:type", String)
    ], FulfillmentStartInstruction.prototype, "maxEstimatedDeliveryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minEstimatedDeliveryDate" }),
        __metadata("design:type", String)
    ], FulfillmentStartInstruction.prototype, "minEstimatedDeliveryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupStep" }),
        __metadata("design:type", PickupStep)
    ], FulfillmentStartInstruction.prototype, "pickupStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingStep" }),
        __metadata("design:type", ShippingStep)
    ], FulfillmentStartInstruction.prototype, "shippingStep", void 0);
    return FulfillmentStartInstruction;
}(SpeakeasyBase));
export { FulfillmentStartInstruction };
