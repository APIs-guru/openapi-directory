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
import { CategoryType } from "./categorytype";
import { TimeDuration } from "./timeduration";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";
// FulfillmentPolicyRequest
/**
 * This root container defines a seller's fulfillment policy for a specific marketplace and category type. Used when creating or updating a fulfillment policy, fulfillmentPolicyRequest encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a fulfillmentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
var FulfillmentPolicyRequest = /** @class */ (function (_super) {
    __extends(FulfillmentPolicyRequest, _super);
    function FulfillmentPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType }),
        __metadata("design:type", Array)
    ], FulfillmentPolicyRequest.prototype, "categoryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FulfillmentPolicyRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freightShipping" }),
        __metadata("design:type", Boolean)
    ], FulfillmentPolicyRequest.prototype, "freightShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=globalShipping" }),
        __metadata("design:type", Boolean)
    ], FulfillmentPolicyRequest.prototype, "globalShipping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=handlingTime" }),
        __metadata("design:type", TimeDuration)
    ], FulfillmentPolicyRequest.prototype, "handlingTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localPickup" }),
        __metadata("design:type", Boolean)
    ], FulfillmentPolicyRequest.prototype, "localPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], FulfillmentPolicyRequest.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FulfillmentPolicyRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupDropOff" }),
        __metadata("design:type", Boolean)
    ], FulfillmentPolicyRequest.prototype, "pickupDropOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipToLocations" }),
        __metadata("design:type", RegionSet)
    ], FulfillmentPolicyRequest.prototype, "shipToLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingOptions", elemType: ShippingOption }),
        __metadata("design:type", Array)
    ], FulfillmentPolicyRequest.prototype, "shippingOptions", void 0);
    return FulfillmentPolicyRequest;
}(SpeakeasyBase));
export { FulfillmentPolicyRequest };
