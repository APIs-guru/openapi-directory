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
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Address } from "./address";
import { ServiceCharge } from "./servicecharge";
import { PaymentCard } from "./paymentcard";
import { ServiceChargeInput } from "./servicecharge";
import { PaymentCardInput } from "./paymentcard";
var OrderCustomers = /** @class */ (function (_super) {
    __extends(OrderCustomers, _super);
    function OrderCustomers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], OrderCustomers.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], OrderCustomers.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], OrderCustomers.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], OrderCustomers.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], OrderCustomers.prototype, "phoneNumbers", void 0);
    return OrderCustomers;
}(SpeakeasyBase));
export { OrderCustomers };
export var OrderDiscountsScopeEnum;
(function (OrderDiscountsScopeEnum) {
    OrderDiscountsScopeEnum["Order"] = "order";
    OrderDiscountsScopeEnum["LineItem"] = "line_item";
})(OrderDiscountsScopeEnum || (OrderDiscountsScopeEnum = {}));
export var OrderDiscountsTypeEnum;
(function (OrderDiscountsTypeEnum) {
    OrderDiscountsTypeEnum["Percentage"] = "percentage";
    OrderDiscountsTypeEnum["FlatFee"] = "flat_fee";
})(OrderDiscountsTypeEnum || (OrderDiscountsTypeEnum = {}));
var OrderDiscounts = /** @class */ (function (_super) {
    __extends(OrderDiscounts, _super);
    function OrderDiscounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderDiscounts.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderDiscounts.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderDiscounts.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderDiscounts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product_id" }),
        __metadata("design:type", String)
    ], OrderDiscounts.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], OrderDiscounts.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderDiscounts.prototype, "type", void 0);
    return OrderDiscounts;
}(SpeakeasyBase));
export { OrderDiscounts };
// OrderFulfillmentsPickupDetailsCurbsidePickupDetails
/**
 * Specific details for curbside pickup.
**/
var OrderFulfillmentsPickupDetailsCurbsidePickupDetails = /** @class */ (function (_super) {
    __extends(OrderFulfillmentsPickupDetailsCurbsidePickupDetails, _super);
    function OrderFulfillmentsPickupDetailsCurbsidePickupDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer_arrived_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsCurbsidePickupDetails.prototype, "buyerArrivedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curbside_details" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsCurbsidePickupDetails.prototype, "curbsideDetails", void 0);
    return OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
}(SpeakeasyBase));
export { OrderFulfillmentsPickupDetailsCurbsidePickupDetails };
var OrderFulfillmentsPickupDetailsRecipient = /** @class */ (function (_super) {
    __extends(OrderFulfillmentsPickupDetailsRecipient, _super);
    function OrderFulfillmentsPickupDetailsRecipient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", Address)
    ], OrderFulfillmentsPickupDetailsRecipient.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsRecipient.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsRecipient.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", Email)
    ], OrderFulfillmentsPickupDetailsRecipient.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", PhoneNumber)
    ], OrderFulfillmentsPickupDetailsRecipient.prototype, "phoneNumber", void 0);
    return OrderFulfillmentsPickupDetailsRecipient;
}(SpeakeasyBase));
export { OrderFulfillmentsPickupDetailsRecipient };
export var OrderFulfillmentsPickupDetailsScheduleTypeEnum;
(function (OrderFulfillmentsPickupDetailsScheduleTypeEnum) {
    OrderFulfillmentsPickupDetailsScheduleTypeEnum["Scheduled"] = "scheduled";
})(OrderFulfillmentsPickupDetailsScheduleTypeEnum || (OrderFulfillmentsPickupDetailsScheduleTypeEnum = {}));
var OrderFulfillmentsPickupDetails = /** @class */ (function (_super) {
    __extends(OrderFulfillmentsPickupDetails, _super);
    function OrderFulfillmentsPickupDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accepted_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "acceptedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_complete_duration" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetails.prototype, "autoCompleteDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancel_reason" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetails.prototype, "cancelReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canceled_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "canceledAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curbside_pickup_details" }),
        __metadata("design:type", OrderFulfillmentsPickupDetailsCurbsidePickupDetails)
    ], OrderFulfillmentsPickupDetails.prototype, "curbsidePickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "expiredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_curbside_pickup" }),
        __metadata("design:type", Boolean)
    ], OrderFulfillmentsPickupDetails.prototype, "isCurbsidePickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetails.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picked_up_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "pickedUpAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "pickupAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup_window_duration" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetails.prototype, "pickupWindowDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placed_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "placedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prep_time_duration" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetails.prototype, "prepTimeDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ready_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "readyAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient" }),
        __metadata("design:type", OrderFulfillmentsPickupDetailsRecipient)
    ], OrderFulfillmentsPickupDetails.prototype, "recipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejected_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetails.prototype, "rejectedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetails.prototype, "scheduleType", void 0);
    return OrderFulfillmentsPickupDetails;
}(SpeakeasyBase));
export { OrderFulfillmentsPickupDetails };
export var OrderFulfillmentsFulfillmentStatusEnum;
(function (OrderFulfillmentsFulfillmentStatusEnum) {
    OrderFulfillmentsFulfillmentStatusEnum["Proposed"] = "proposed";
    OrderFulfillmentsFulfillmentStatusEnum["Reserved"] = "reserved";
    OrderFulfillmentsFulfillmentStatusEnum["Prepared"] = "prepared";
    OrderFulfillmentsFulfillmentStatusEnum["Completed"] = "completed";
    OrderFulfillmentsFulfillmentStatusEnum["Cancelled"] = "cancelled";
    OrderFulfillmentsFulfillmentStatusEnum["Failed"] = "failed";
    OrderFulfillmentsFulfillmentStatusEnum["Other"] = "other";
})(OrderFulfillmentsFulfillmentStatusEnum || (OrderFulfillmentsFulfillmentStatusEnum = {}));
export var OrderFulfillmentsTypeEnum;
(function (OrderFulfillmentsTypeEnum) {
    OrderFulfillmentsTypeEnum["Pickup"] = "pickup";
    OrderFulfillmentsTypeEnum["Shipment"] = "shipment";
})(OrderFulfillmentsTypeEnum || (OrderFulfillmentsTypeEnum = {}));
var OrderFulfillments = /** @class */ (function (_super) {
    __extends(OrderFulfillments, _super);
    function OrderFulfillments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderFulfillments.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup_details" }),
        __metadata("design:type", OrderFulfillmentsPickupDetails)
    ], OrderFulfillments.prototype, "pickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipment_details" }),
        __metadata("design:type", Map)
    ], OrderFulfillments.prototype, "shipmentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OrderFulfillments.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderFulfillments.prototype, "type", void 0);
    return OrderFulfillments;
}(SpeakeasyBase));
export { OrderFulfillments };
var OrderLineItems = /** @class */ (function (_super) {
    __extends(OrderLineItems, _super);
    function OrderLineItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_discounts" }),
        __metadata("design:type", Array)
    ], OrderLineItems.prototype, "appliedDiscounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_taxes" }),
        __metadata("design:type", Array)
    ], OrderLineItems.prototype, "appliedTaxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderLineItems.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", Object)
    ], OrderLineItems.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], OrderLineItems.prototype, "modifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderLineItems.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], OrderLineItems.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], OrderLineItems.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_discount" }),
        __metadata("design:type", Number)
    ], OrderLineItems.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], OrderLineItems.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], OrderLineItems.prototype, "unitPrice", void 0);
    return OrderLineItems;
}(SpeakeasyBase));
export { OrderLineItems };
export var OrderPosPaymentStatusEnum;
(function (OrderPosPaymentStatusEnum) {
    OrderPosPaymentStatusEnum["Open"] = "open";
    OrderPosPaymentStatusEnum["Paid"] = "paid";
    OrderPosPaymentStatusEnum["Refunded"] = "refunded";
    OrderPosPaymentStatusEnum["Credited"] = "credited";
    OrderPosPaymentStatusEnum["PartiallyPaid"] = "partially_paid";
    OrderPosPaymentStatusEnum["PartiallyRefunded"] = "partially_refunded";
    OrderPosPaymentStatusEnum["Unknown"] = "unknown";
})(OrderPosPaymentStatusEnum || (OrderPosPaymentStatusEnum = {}));
var OrderPayments = /** @class */ (function (_super) {
    __extends(OrderPayments, _super);
    function OrderPayments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderPayments.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderPayments.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderPayments.prototype, "id", void 0);
    return OrderPayments;
}(SpeakeasyBase));
export { OrderPayments };
export var OrderRefundsStatusEnum;
(function (OrderRefundsStatusEnum) {
    OrderRefundsStatusEnum["Pending"] = "pending";
    OrderRefundsStatusEnum["Approved"] = "approved";
    OrderRefundsStatusEnum["Rejected"] = "rejected";
    OrderRefundsStatusEnum["Failed"] = "failed";
})(OrderRefundsStatusEnum || (OrderRefundsStatusEnum = {}));
var OrderRefunds = /** @class */ (function (_super) {
    __extends(OrderRefunds, _super);
    function OrderRefunds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderRefunds.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tender_id" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "tenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], OrderRefunds.prototype, "transactionId", void 0);
    return OrderRefunds;
}(SpeakeasyBase));
export { OrderRefunds };
export var OrderSourceEnum;
(function (OrderSourceEnum) {
    OrderSourceEnum["InStore"] = "in-store";
    OrderSourceEnum["Online"] = "online";
    OrderSourceEnum["Opt"] = "opt";
    OrderSourceEnum["Api"] = "api";
    OrderSourceEnum["Kiosk"] = "kiosk";
    OrderSourceEnum["CallerId"] = "caller-id";
    OrderSourceEnum["Google"] = "google";
    OrderSourceEnum["Invoice"] = "invoice";
})(OrderSourceEnum || (OrderSourceEnum = {}));
export var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["Open"] = "open";
    OrderStatusEnum["Draft"] = "draft";
    OrderStatusEnum["Delivered"] = "delivered";
    OrderStatusEnum["Delayed"] = "delayed";
    OrderStatusEnum["Voided"] = "voided";
    OrderStatusEnum["Completed"] = "completed";
    OrderStatusEnum["Hidden"] = "hidden";
})(OrderStatusEnum || (OrderStatusEnum = {}));
export var OrderTendersCardEntryMethodEnum;
(function (OrderTendersCardEntryMethodEnum) {
    OrderTendersCardEntryMethodEnum["Evm"] = "evm";
    OrderTendersCardEntryMethodEnum["Swiped"] = "swiped";
    OrderTendersCardEntryMethodEnum["Keyed"] = "keyed";
    OrderTendersCardEntryMethodEnum["OnFile"] = "on-file";
    OrderTendersCardEntryMethodEnum["Contactless"] = "contactless";
})(OrderTendersCardEntryMethodEnum || (OrderTendersCardEntryMethodEnum = {}));
export var OrderTendersCardStatusEnum;
(function (OrderTendersCardStatusEnum) {
    OrderTendersCardStatusEnum["Authorized"] = "authorized";
    OrderTendersCardStatusEnum["Captured"] = "captured";
    OrderTendersCardStatusEnum["Failed"] = "failed";
    OrderTendersCardStatusEnum["Voided"] = "voided";
})(OrderTendersCardStatusEnum || (OrderTendersCardStatusEnum = {}));
export var OrderTendersTypeEnum;
(function (OrderTendersTypeEnum) {
    OrderTendersTypeEnum["Cash"] = "cash";
    OrderTendersTypeEnum["Card"] = "card";
    OrderTendersTypeEnum["Other"] = "other";
})(OrderTendersTypeEnum || (OrderTendersTypeEnum = {}));
var OrderTenders = /** @class */ (function (_super) {
    __extends(OrderTenders, _super);
    function OrderTenders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer_tendered_cash_amount" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "buyerTenderedCashAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card" }),
        __metadata("design:type", PaymentCard)
    ], OrderTenders.prototype, "card", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_entry_method" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "cardEntryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_status" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "cardStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=change_back_cash_amount" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "changeBackCashAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_id" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "paymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_discount" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_processing_fee" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalProcessingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_refund" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_service_charge" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalServiceCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tip" }),
        __metadata("design:type", Number)
    ], OrderTenders.prototype, "totalTip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderTenders.prototype, "type", void 0);
    return OrderTenders;
}(SpeakeasyBase));
export { OrderTenders };
var OrderDiscountsInput = /** @class */ (function (_super) {
    __extends(OrderDiscountsInput, _super);
    function OrderDiscountsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderDiscountsInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderDiscountsInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderDiscountsInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], OrderDiscountsInput.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderDiscountsInput.prototype, "type", void 0);
    return OrderDiscountsInput;
}(SpeakeasyBase));
export { OrderDiscountsInput };
var OrderFulfillmentsPickupDetailsInput = /** @class */ (function (_super) {
    __extends(OrderFulfillmentsPickupDetailsInput, _super);
    function OrderFulfillmentsPickupDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auto_complete_duration" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "autoCompleteDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancel_reason" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "cancelReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canceled_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "canceledAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=curbside_pickup_details" }),
        __metadata("design:type", OrderFulfillmentsPickupDetailsCurbsidePickupDetails)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "curbsidePickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "expiredAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_curbside_pickup" }),
        __metadata("design:type", Boolean)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "isCurbsidePickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picked_up_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "pickedUpAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "pickupAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup_window_duration" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "pickupWindowDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placed_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "placedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prep_time_duration" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "prepTimeDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ready_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "readyAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipient" }),
        __metadata("design:type", OrderFulfillmentsPickupDetailsRecipient)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "recipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejected_at" }),
        __metadata("design:type", Date)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "rejectedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsPickupDetailsInput.prototype, "scheduleType", void 0);
    return OrderFulfillmentsPickupDetailsInput;
}(SpeakeasyBase));
export { OrderFulfillmentsPickupDetailsInput };
var OrderFulfillmentsInput = /** @class */ (function (_super) {
    __extends(OrderFulfillmentsInput, _super);
    function OrderFulfillmentsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickup_details" }),
        __metadata("design:type", OrderFulfillmentsPickupDetailsInput)
    ], OrderFulfillmentsInput.prototype, "pickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipment_details" }),
        __metadata("design:type", Map)
    ], OrderFulfillmentsInput.prototype, "shipmentDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderFulfillmentsInput.prototype, "type", void 0);
    return OrderFulfillmentsInput;
}(SpeakeasyBase));
export { OrderFulfillmentsInput };
var OrderLineItemsInput = /** @class */ (function (_super) {
    __extends(OrderLineItemsInput, _super);
    function OrderLineItemsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_discounts" }),
        __metadata("design:type", Array)
    ], OrderLineItemsInput.prototype, "appliedDiscounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_taxes" }),
        __metadata("design:type", Array)
    ], OrderLineItemsInput.prototype, "appliedTaxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", Object)
    ], OrderLineItemsInput.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], OrderLineItemsInput.prototype, "modifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderLineItemsInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], OrderLineItemsInput.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], OrderLineItemsInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_discount" }),
        __metadata("design:type", Number)
    ], OrderLineItemsInput.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], OrderLineItemsInput.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], OrderLineItemsInput.prototype, "unitPrice", void 0);
    return OrderLineItemsInput;
}(SpeakeasyBase));
export { OrderLineItemsInput };
var OrderPaymentsInput = /** @class */ (function (_super) {
    __extends(OrderPaymentsInput, _super);
    function OrderPaymentsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderPaymentsInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderPaymentsInput.prototype, "currency", void 0);
    return OrderPaymentsInput;
}(SpeakeasyBase));
export { OrderPaymentsInput };
var OrderRefundsInput = /** @class */ (function (_super) {
    __extends(OrderRefundsInput, _super);
    function OrderRefundsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderRefundsInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderRefundsInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], OrderRefundsInput.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OrderRefundsInput.prototype, "status", void 0);
    return OrderRefundsInput;
}(SpeakeasyBase));
export { OrderRefundsInput };
var OrderTendersInput = /** @class */ (function (_super) {
    __extends(OrderTendersInput, _super);
    function OrderTendersInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer_tendered_cash_amount" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "buyerTenderedCashAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card" }),
        __metadata("design:type", PaymentCardInput)
    ], OrderTendersInput.prototype, "card", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_entry_method" }),
        __metadata("design:type", String)
    ], OrderTendersInput.prototype, "cardEntryMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card_status" }),
        __metadata("design:type", String)
    ], OrderTendersInput.prototype, "cardStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=change_back_cash_amount" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "changeBackCashAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderTendersInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderTendersInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OrderTendersInput.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentage" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "percentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_discount" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_processing_fee" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalProcessingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_refund" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_service_charge" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalServiceCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tip" }),
        __metadata("design:type", Number)
    ], OrderTendersInput.prototype, "totalTip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderTendersInput.prototype, "type", void 0);
    return OrderTendersInput;
}(SpeakeasyBase));
export { OrderTendersInput };
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_date" }),
        __metadata("design:type", Date)
    ], Order.prototype, "closedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Order.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Order.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Order.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], Order.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customers", elemType: OrderCustomers }),
        __metadata("design:type", Array)
    ], Order.prototype, "customers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discounts", elemType: OrderDiscounts }),
        __metadata("design:type", Array)
    ], Order.prototype, "discounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], Order.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillments", elemType: OrderFulfillments }),
        __metadata("design:type", Array)
    ], Order.prototype, "fulfillments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], Order.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: OrderLineItems }),
        __metadata("design:type", Array)
    ], Order.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], Order.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], Order.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Order.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_date" }),
        __metadata("design:type", Date)
    ], Order.prototype, "orderDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_number" }),
        __metadata("design:type", String)
    ], Order.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_type_id" }),
        __metadata("design:type", String)
    ], Order.prototype, "orderTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_status" }),
        __metadata("design:type", String)
    ], Order.prototype, "paymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payments", elemType: OrderPayments }),
        __metadata("design:type", Array)
    ], Order.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference_id" }),
        __metadata("design:type", String)
    ], Order.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded" }),
        __metadata("design:type", Boolean)
    ], Order.prototype, "refunded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefunds }),
        __metadata("design:type", Array)
    ], Order.prototype, "refunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seat" }),
        __metadata("design:type", String)
    ], Order.prototype, "seat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceCharge }),
        __metadata("design:type", Array)
    ], Order.prototype, "serviceCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Order.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Order.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", String)
    ], Order.prototype, "table", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxes" }),
        __metadata("design:type", Array)
    ], Order.prototype, "taxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenders", elemType: OrderTenders }),
        __metadata("design:type", Array)
    ], Order.prototype, "tenders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Order.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], Order.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_discount" }),
        __metadata("design:type", Number)
    ], Order.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_refund" }),
        __metadata("design:type", Number)
    ], Order.prototype, "totalRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_service_charge" }),
        __metadata("design:type", Number)
    ], Order.prototype, "totalServiceCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], Order.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tip" }),
        __metadata("design:type", Number)
    ], Order.prototype, "totalTip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Order.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Order.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Order.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voided" }),
        __metadata("design:type", Boolean)
    ], Order.prototype, "voided", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voided_at" }),
        __metadata("design:type", Date)
    ], Order.prototype, "voidedAt", void 0);
    return Order;
}(SpeakeasyBase));
export { Order };
var OrderInput = /** @class */ (function (_super) {
    __extends(OrderInput, _super);
    function OrderInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed_date" }),
        __metadata("design:type", Date)
    ], OrderInput.prototype, "closedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customers", elemType: OrderCustomers }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "customers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discounts", elemType: OrderDiscountsInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "discounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "employeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillments", elemType: OrderFulfillmentsInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "fulfillments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "idempotencyKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: OrderLineItemsInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_date" }),
        __metadata("design:type", Date)
    ], OrderInput.prototype, "orderDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_number" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_type_id" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "orderTypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_status" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "paymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payments", elemType: OrderPaymentsInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference_id" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunded" }),
        __metadata("design:type", Boolean)
    ], OrderInput.prototype, "refunded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefundsInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "refunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seat" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "seat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceChargeInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "serviceCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=table" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "table", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxes" }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "taxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenders", elemType: OrderTendersInput }),
        __metadata("design:type", Array)
    ], OrderInput.prototype, "tenders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], OrderInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_discount" }),
        __metadata("design:type", Number)
    ], OrderInput.prototype, "totalDiscount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_refund" }),
        __metadata("design:type", Number)
    ], OrderInput.prototype, "totalRefund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_service_charge" }),
        __metadata("design:type", Number)
    ], OrderInput.prototype, "totalServiceCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], OrderInput.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tip" }),
        __metadata("design:type", Number)
    ], OrderInput.prototype, "totalTip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], OrderInput.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voided" }),
        __metadata("design:type", Boolean)
    ], OrderInput.prototype, "voided", void 0);
    return OrderInput;
}(SpeakeasyBase));
export { OrderInput };
