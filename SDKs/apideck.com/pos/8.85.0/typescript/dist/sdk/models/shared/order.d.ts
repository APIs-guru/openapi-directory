import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Address } from "./address";
import { ServiceCharge } from "./servicecharge";
import { PaymentCard } from "./paymentcard";
import { ServiceChargeInput } from "./servicecharge";
import { PaymentCardInput } from "./paymentcard";
export declare class OrderCustomers extends SpeakeasyBase {
    emails?: Email[];
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phoneNumbers?: PhoneNumber[];
}
export declare enum OrderDiscountsScopeEnum {
    Order = "order",
    LineItem = "line_item"
}
export declare enum OrderDiscountsTypeEnum {
    Percentage = "percentage",
    FlatFee = "flat_fee"
}
export declare class OrderDiscounts extends SpeakeasyBase {
    amount?: number;
    currency?: CurrencyEnum;
    id?: string;
    name?: string;
    productId?: string;
    scope?: OrderDiscountsScopeEnum;
    type?: OrderDiscountsTypeEnum;
}
/**
 * Specific details for curbside pickup.
**/
export declare class OrderFulfillmentsPickupDetailsCurbsidePickupDetails extends SpeakeasyBase {
    buyerArrivedAt?: Date;
    curbsideDetails?: string;
}
export declare class OrderFulfillmentsPickupDetailsRecipient extends SpeakeasyBase {
    address?: Address;
    customerId?: string;
    displayName?: string;
    email?: Email;
    phoneNumber?: PhoneNumber;
}
export declare enum OrderFulfillmentsPickupDetailsScheduleTypeEnum {
    Scheduled = "scheduled"
}
export declare class OrderFulfillmentsPickupDetails extends SpeakeasyBase {
    acceptedAt?: Date;
    autoCompleteDuration?: string;
    cancelReason?: string;
    canceledAt?: Date;
    curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
    expiredAt?: Date;
    expiresAt?: Date;
    isCurbsidePickup?: boolean;
    note?: string;
    pickedUpAt?: Date;
    pickupAt?: Date;
    pickupWindowDuration?: string;
    placedAt?: Date;
    prepTimeDuration?: string;
    readyAt?: Date;
    recipient?: OrderFulfillmentsPickupDetailsRecipient;
    rejectedAt?: Date;
    scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}
export declare enum OrderFulfillmentsFulfillmentStatusEnum {
    Proposed = "proposed",
    Reserved = "reserved",
    Prepared = "prepared",
    Completed = "completed",
    Cancelled = "cancelled",
    Failed = "failed",
    Other = "other"
}
export declare enum OrderFulfillmentsTypeEnum {
    Pickup = "pickup",
    Shipment = "shipment"
}
export declare class OrderFulfillments extends SpeakeasyBase {
    id?: string;
    pickupDetails?: OrderFulfillmentsPickupDetails;
    shipmentDetails?: Map<string, any>;
    status?: OrderFulfillmentsFulfillmentStatusEnum;
    type?: OrderFulfillmentsTypeEnum;
}
export declare class OrderLineItems extends SpeakeasyBase {
    appliedDiscounts?: any[];
    appliedTaxes?: any[];
    id?: string;
    item?: any;
    modifiers?: any[];
    name?: string;
    quantity?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalTax?: number;
    unitPrice?: number;
}
export declare enum OrderPosPaymentStatusEnum {
    Open = "open",
    Paid = "paid",
    Refunded = "refunded",
    Credited = "credited",
    PartiallyPaid = "partially_paid",
    PartiallyRefunded = "partially_refunded",
    Unknown = "unknown"
}
export declare class OrderPayments extends SpeakeasyBase {
    amount?: number;
    currency?: CurrencyEnum;
    id?: string;
}
export declare enum OrderRefundsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Failed = "failed"
}
export declare class OrderRefunds extends SpeakeasyBase {
    amount?: number;
    currency?: CurrencyEnum;
    id?: string;
    locationId?: string;
    reason?: string;
    status?: OrderRefundsStatusEnum;
    tenderId?: string;
    transactionId?: string;
}
export declare enum OrderSourceEnum {
    InStore = "in-store",
    Online = "online",
    Opt = "opt",
    Api = "api",
    Kiosk = "kiosk",
    CallerId = "caller-id",
    Google = "google",
    Invoice = "invoice"
}
export declare enum OrderStatusEnum {
    Open = "open",
    Draft = "draft",
    Delivered = "delivered",
    Delayed = "delayed",
    Voided = "voided",
    Completed = "completed",
    Hidden = "hidden"
}
export declare enum OrderTendersCardEntryMethodEnum {
    Evm = "evm",
    Swiped = "swiped",
    Keyed = "keyed",
    OnFile = "on-file",
    Contactless = "contactless"
}
export declare enum OrderTendersCardStatusEnum {
    Authorized = "authorized",
    Captured = "captured",
    Failed = "failed",
    Voided = "voided"
}
export declare enum OrderTendersTypeEnum {
    Cash = "cash",
    Card = "card",
    Other = "other"
}
export declare class OrderTenders extends SpeakeasyBase {
    amount?: number;
    buyerTenderedCashAmount?: number;
    card?: PaymentCard;
    cardEntryMethod?: OrderTendersCardEntryMethodEnum;
    cardStatus?: OrderTendersCardStatusEnum;
    changeBackCashAmount?: number;
    currency?: CurrencyEnum;
    id?: string;
    locationId?: string;
    name?: string;
    note?: string;
    paymentId?: string;
    percentage?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalProcessingFee?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    transactionId?: string;
    type?: OrderTendersTypeEnum;
}
export declare class OrderDiscountsInput extends SpeakeasyBase {
    amount?: number;
    currency?: CurrencyEnum;
    name?: string;
    scope?: OrderDiscountsScopeEnum;
    type?: OrderDiscountsTypeEnum;
}
export declare class OrderFulfillmentsPickupDetailsInput extends SpeakeasyBase {
    autoCompleteDuration?: string;
    cancelReason?: string;
    canceledAt?: Date;
    curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;
    expiredAt?: Date;
    expiresAt?: Date;
    isCurbsidePickup?: boolean;
    note?: string;
    pickedUpAt?: Date;
    pickupAt?: Date;
    pickupWindowDuration?: string;
    placedAt?: Date;
    prepTimeDuration?: string;
    readyAt?: Date;
    recipient?: OrderFulfillmentsPickupDetailsRecipient;
    rejectedAt?: Date;
    scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}
export declare class OrderFulfillmentsInput extends SpeakeasyBase {
    id?: string;
    pickupDetails?: OrderFulfillmentsPickupDetailsInput;
    shipmentDetails?: Map<string, any>;
    status?: OrderFulfillmentsFulfillmentStatusEnum;
    type?: OrderFulfillmentsTypeEnum;
}
export declare class OrderLineItemsInput extends SpeakeasyBase {
    appliedDiscounts?: any[];
    appliedTaxes?: any[];
    item?: any;
    modifiers?: any[];
    name?: string;
    quantity?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalTax?: number;
    unitPrice?: number;
}
export declare class OrderPaymentsInput extends SpeakeasyBase {
    amount?: number;
    currency?: CurrencyEnum;
}
export declare class OrderRefundsInput extends SpeakeasyBase {
    amount?: number;
    currency?: CurrencyEnum;
    reason?: string;
    status?: OrderRefundsStatusEnum;
}
export declare class OrderTendersInput extends SpeakeasyBase {
    amount?: number;
    buyerTenderedCashAmount?: number;
    card?: PaymentCardInput;
    cardEntryMethod?: OrderTendersCardEntryMethodEnum;
    cardStatus?: OrderTendersCardStatusEnum;
    changeBackCashAmount?: number;
    currency?: CurrencyEnum;
    name?: string;
    note?: string;
    percentage?: number;
    totalAmount?: number;
    totalDiscount?: number;
    totalProcessingFee?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    type?: OrderTendersTypeEnum;
}
export declare class Order extends SpeakeasyBase {
    closedDate?: Date;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    customerId?: string;
    customers?: OrderCustomers[];
    discounts?: OrderDiscounts[];
    employeeId?: string;
    fulfillments?: OrderFulfillments[];
    id?: string;
    idempotencyKey?: string;
    lineItems?: OrderLineItems[];
    locationId: string;
    merchantId: string;
    note?: string;
    orderDate?: Date;
    orderNumber?: string;
    orderTypeId?: string;
    paymentStatus?: OrderPosPaymentStatusEnum;
    payments?: OrderPayments[];
    referenceId?: string;
    refunded?: boolean;
    refunds?: OrderRefunds[];
    seat?: string;
    serviceCharges?: ServiceCharge[];
    source?: OrderSourceEnum;
    status?: OrderStatusEnum;
    table?: string;
    taxes?: any[];
    tenders?: OrderTenders[];
    title?: string;
    totalAmount?: number;
    totalDiscount?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    updatedAt?: Date;
    updatedBy?: string;
    version?: string;
    voided?: boolean;
    voidedAt?: Date;
}
export declare class OrderInput extends SpeakeasyBase {
    closedDate?: Date;
    currency?: CurrencyEnum;
    customerId?: string;
    customers?: OrderCustomers[];
    discounts?: OrderDiscountsInput[];
    employeeId?: string;
    fulfillments?: OrderFulfillmentsInput[];
    idempotencyKey?: string;
    lineItems?: OrderLineItemsInput[];
    locationId: string;
    merchantId: string;
    note?: string;
    orderDate?: Date;
    orderNumber?: string;
    orderTypeId?: string;
    paymentStatus?: OrderPosPaymentStatusEnum;
    payments?: OrderPaymentsInput[];
    referenceId?: string;
    refunded?: boolean;
    refunds?: OrderRefundsInput[];
    seat?: string;
    serviceCharges?: ServiceChargeInput[];
    status?: OrderStatusEnum;
    table?: string;
    taxes?: any[];
    tenders?: OrderTendersInput[];
    title?: string;
    totalAmount?: number;
    totalDiscount?: number;
    totalRefund?: number;
    totalServiceCharge?: number;
    totalTax?: number;
    totalTip?: number;
    version?: string;
    voided?: boolean;
}
