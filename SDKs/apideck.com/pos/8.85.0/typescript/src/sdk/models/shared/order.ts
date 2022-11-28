import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Address } from "./address";
import { ServiceCharge } from "./servicecharge";
import { PaymentCard } from "./paymentcard";
import { ServiceChargeInput } from "./servicecharge";
import { PaymentCardInput } from "./paymentcard";



export class OrderCustomers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];
}

export enum OrderDiscountsScopeEnum {
    Order = "order",
    LineItem = "line_item"
}

export enum OrderDiscountsTypeEnum {
    Percentage = "percentage",
    FlatFee = "flat_fee"
}


export class OrderDiscounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: OrderDiscountsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderDiscountsTypeEnum;
}


// OrderFulfillmentsPickupDetailsCurbsidePickupDetails
/** 
 * Specific details for curbside pickup.
**/
export class OrderFulfillmentsPickupDetailsCurbsidePickupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyer_arrived_at" })
  buyerArrivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=curbside_details" })
  curbsideDetails?: string;
}


export class OrderFulfillmentsPickupDetailsRecipient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: Email;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: PhoneNumber;
}

export enum OrderFulfillmentsPickupDetailsScheduleTypeEnum {
    Scheduled = "scheduled"
}


export class OrderFulfillmentsPickupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepted_at" })
  acceptedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=auto_complete_duration" })
  autoCompleteDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @SpeakeasyMetadata({ data: "json, name=canceled_at" })
  canceledAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=curbside_pickup_details" })
  curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;

  @SpeakeasyMetadata({ data: "json, name=expired_at" })
  expiredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=is_curbside_pickup" })
  isCurbsidePickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=picked_up_at" })
  pickedUpAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pickup_at" })
  pickupAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pickup_window_duration" })
  pickupWindowDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=placed_at" })
  placedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=prep_time_duration" })
  prepTimeDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=ready_at" })
  readyAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient?: OrderFulfillmentsPickupDetailsRecipient;

  @SpeakeasyMetadata({ data: "json, name=rejected_at" })
  rejectedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=schedule_type" })
  scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}

export enum OrderFulfillmentsFulfillmentStatusEnum {
    Proposed = "proposed",
    Reserved = "reserved",
    Prepared = "prepared",
    Completed = "completed",
    Cancelled = "cancelled",
    Failed = "failed",
    Other = "other"
}

export enum OrderFulfillmentsTypeEnum {
    Pickup = "pickup",
    Shipment = "shipment"
}


export class OrderFulfillments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pickup_details" })
  pickupDetails?: OrderFulfillmentsPickupDetails;

  @SpeakeasyMetadata({ data: "json, name=shipment_details" })
  shipmentDetails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderFulfillmentsFulfillmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderFulfillmentsTypeEnum;
}


export class OrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_discounts" })
  appliedDiscounts?: any[];

  @SpeakeasyMetadata({ data: "json, name=applied_taxes" })
  appliedTaxes?: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: any;

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}

export enum OrderPosPaymentStatusEnum {
    Open = "open",
    Paid = "paid",
    Refunded = "refunded",
    Credited = "credited",
    PartiallyPaid = "partially_paid",
    PartiallyRefunded = "partially_refunded",
    Unknown = "unknown"
}


export class OrderPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum OrderRefundsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Failed = "failed"
}


export class OrderRefunds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderRefundsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tender_id" })
  tenderId?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}

export enum OrderSourceEnum {
    InStore = "in-store",
    Online = "online",
    Opt = "opt",
    Api = "api",
    Kiosk = "kiosk",
    CallerId = "caller-id",
    Google = "google",
    Invoice = "invoice"
}

export enum OrderStatusEnum {
    Open = "open",
    Draft = "draft",
    Delivered = "delivered",
    Delayed = "delayed",
    Voided = "voided",
    Completed = "completed",
    Hidden = "hidden"
}

export enum OrderTendersCardEntryMethodEnum {
    Evm = "evm",
    Swiped = "swiped",
    Keyed = "keyed",
    OnFile = "on-file",
    Contactless = "contactless"
}

export enum OrderTendersCardStatusEnum {
    Authorized = "authorized",
    Captured = "captured",
    Failed = "failed",
    Voided = "voided"
}

export enum OrderTendersTypeEnum {
    Cash = "cash",
    Card = "card",
    Other = "other"
}


export class OrderTenders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=buyer_tendered_cash_amount" })
  buyerTenderedCashAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: PaymentCard;

  @SpeakeasyMetadata({ data: "json, name=card_entry_method" })
  cardEntryMethod?: OrderTendersCardEntryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=card_status" })
  cardStatus?: OrderTendersCardStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=change_back_cash_amount" })
  changeBackCashAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_processing_fee" })
  totalProcessingFee?: number;

  @SpeakeasyMetadata({ data: "json, name=total_refund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=total_service_charge" })
  totalServiceCharge?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tip" })
  totalTip?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderTendersTypeEnum;
}


export class OrderDiscountsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: OrderDiscountsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderDiscountsTypeEnum;
}


export class OrderFulfillmentsPickupDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_complete_duration" })
  autoCompleteDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @SpeakeasyMetadata({ data: "json, name=canceled_at" })
  canceledAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=curbside_pickup_details" })
  curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;

  @SpeakeasyMetadata({ data: "json, name=expired_at" })
  expiredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=is_curbside_pickup" })
  isCurbsidePickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=picked_up_at" })
  pickedUpAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pickup_at" })
  pickupAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=pickup_window_duration" })
  pickupWindowDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=placed_at" })
  placedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=prep_time_duration" })
  prepTimeDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=ready_at" })
  readyAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=recipient" })
  recipient?: OrderFulfillmentsPickupDetailsRecipient;

  @SpeakeasyMetadata({ data: "json, name=rejected_at" })
  rejectedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=schedule_type" })
  scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}


export class OrderFulfillmentsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pickup_details" })
  pickupDetails?: OrderFulfillmentsPickupDetailsInput;

  @SpeakeasyMetadata({ data: "json, name=shipment_details" })
  shipmentDetails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderFulfillmentsFulfillmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderFulfillmentsTypeEnum;
}


export class OrderLineItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_discounts" })
  appliedDiscounts?: any[];

  @SpeakeasyMetadata({ data: "json, name=applied_taxes" })
  appliedTaxes?: any[];

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: any;

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}


export class OrderPaymentsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;
}


export class OrderRefundsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderRefundsStatusEnum;
}


export class OrderTendersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=buyer_tendered_cash_amount" })
  buyerTenderedCashAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: PaymentCardInput;

  @SpeakeasyMetadata({ data: "json, name=card_entry_method" })
  cardEntryMethod?: OrderTendersCardEntryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=card_status" })
  cardStatus?: OrderTendersCardStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=change_back_cash_amount" })
  changeBackCashAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_processing_fee" })
  totalProcessingFee?: number;

  @SpeakeasyMetadata({ data: "json, name=total_refund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=total_service_charge" })
  totalServiceCharge?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tip" })
  totalTip?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: OrderTendersTypeEnum;
}


export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed_date" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customers", elemType: OrderCustomers })
  customers?: OrderCustomers[];

  @SpeakeasyMetadata({ data: "json, name=discounts", elemType: OrderDiscounts })
  discounts?: OrderDiscounts[];

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillments", elemType: OrderFulfillments })
  fulfillments?: OrderFulfillments[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: OrderLineItems })
  lineItems?: OrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=order_date" })
  orderDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=order_number" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=order_type_id" })
  orderTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_status" })
  paymentStatus?: OrderPosPaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: OrderPayments })
  payments?: OrderPayments[];

  @SpeakeasyMetadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=refunded" })
  refunded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefunds })
  refunds?: OrderRefunds[];

  @SpeakeasyMetadata({ data: "json, name=seat" })
  seat?: string;

  @SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceCharge })
  serviceCharges?: ServiceCharge[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: OrderSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=taxes" })
  taxes?: any[];

  @SpeakeasyMetadata({ data: "json, name=tenders", elemType: OrderTenders })
  tenders?: OrderTenders[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_refund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=total_service_charge" })
  totalServiceCharge?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tip" })
  totalTip?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=voided" })
  voided?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voided_at" })
  voidedAt?: Date;
}


export class OrderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed_date" })
  closedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customers", elemType: OrderCustomers })
  customers?: OrderCustomers[];

  @SpeakeasyMetadata({ data: "json, name=discounts", elemType: OrderDiscountsInput })
  discounts?: OrderDiscountsInput[];

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillments", elemType: OrderFulfillmentsInput })
  fulfillments?: OrderFulfillmentsInput[];

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=line_items", elemType: OrderLineItemsInput })
  lineItems?: OrderLineItemsInput[];

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=order_date" })
  orderDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=order_number" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=order_type_id" })
  orderTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_status" })
  paymentStatus?: OrderPosPaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=payments", elemType: OrderPaymentsInput })
  payments?: OrderPaymentsInput[];

  @SpeakeasyMetadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=refunded" })
  refunded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefundsInput })
  refunds?: OrderRefundsInput[];

  @SpeakeasyMetadata({ data: "json, name=seat" })
  seat?: string;

  @SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceChargeInput })
  serviceCharges?: ServiceChargeInput[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=taxes" })
  taxes?: any[];

  @SpeakeasyMetadata({ data: "json, name=tenders", elemType: OrderTendersInput })
  tenders?: OrderTendersInput[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_refund" })
  totalRefund?: number;

  @SpeakeasyMetadata({ data: "json, name=total_service_charge" })
  totalServiceCharge?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=total_tip" })
  totalTip?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=voided" })
  voided?: boolean;
}
