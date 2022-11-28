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
import { Buyer } from "./buyer";
import { CancelStatus } from "./cancelstatus";
import { FulfillmentStartInstruction } from "./fulfillmentstartinstruction";
import { LineItem } from "./lineitem";
import { PaymentSummary } from "./paymentsummary";
import { PricingSummary } from "./pricingsummary";
import { Program } from "./program";
import { Amount } from "./amount";
// Order
/**
 * This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
**/
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer" }),
        __metadata("design:type", Buyer)
    ], Order.prototype, "buyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyerCheckoutNotes" }),
        __metadata("design:type", String)
    ], Order.prototype, "buyerCheckoutNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelStatus" }),
        __metadata("design:type", CancelStatus)
    ], Order.prototype, "cancelStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], Order.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebayCollectAndRemitTax" }),
        __metadata("design:type", Boolean)
    ], Order.prototype, "ebayCollectAndRemitTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentHrefs" }),
        __metadata("design:type", Array)
    ], Order.prototype, "fulfillmentHrefs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentStartInstructions", elemType: FulfillmentStartInstruction }),
        __metadata("design:type", Array)
    ], Order.prototype, "fulfillmentStartInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", String)
    ], Order.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyOrderId" }),
        __metadata("design:type", String)
    ], Order.prototype, "legacyOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: LineItem }),
        __metadata("design:type", Array)
    ], Order.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderFulfillmentStatus" }),
        __metadata("design:type", String)
    ], Order.prototype, "orderFulfillmentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], Order.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderPaymentStatus" }),
        __metadata("design:type", String)
    ], Order.prototype, "orderPaymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentSummary" }),
        __metadata("design:type", PaymentSummary)
    ], Order.prototype, "paymentSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricingSummary" }),
        __metadata("design:type", PricingSummary)
    ], Order.prototype, "pricingSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=program" }),
        __metadata("design:type", Program)
    ], Order.prototype, "program", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salesRecordReference" }),
        __metadata("design:type", String)
    ], Order.prototype, "salesRecordReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerId" }),
        __metadata("design:type", String)
    ], Order.prototype, "sellerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFeeBasisAmount" }),
        __metadata("design:type", Amount)
    ], Order.prototype, "totalFeeBasisAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalMarketplaceFee" }),
        __metadata("design:type", Amount)
    ], Order.prototype, "totalMarketplaceFee", void 0);
    return Order;
}(SpeakeasyBase));
export { Order };
