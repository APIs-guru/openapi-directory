import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { CurrencyEnum } from "./currencyenum";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { CurrencyEnum } from "./currencyenum";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";
import { PaymentCard } from "./paymentcard";
import { CurrencyEnum } from "./currencyenum";


export class OrderCustomers extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];
}

export enum OrderDiscountsScopeEnum {
    Order = "order"
,    LineItem = "line_item"
}

export enum OrderDiscountsTypeEnum {
    Percentage = "percentage"
,    FlatFee = "flat_fee"
}


export class OrderDiscounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product_id" })
  productId?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: OrderDiscountsScopeEnum;

  @Metadata({ data: "json, name=type" })
  type?: OrderDiscountsTypeEnum;
}


// OrderFulfillmentsPickupDetailsCurbsidePickupDetails
/** 
 * Specific details for curbside pickup.
**/
export class OrderFulfillmentsPickupDetailsCurbsidePickupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyer_arrived_at" })
  buyerArrivedAt?: Date;

  @Metadata({ data: "json, name=curbside_details" })
  curbsideDetails?: string;
}


export class OrderFulfillmentsPickupDetailsRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: Email;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: PhoneNumber;
}

export enum OrderFulfillmentsPickupDetailsScheduleTypeEnum {
    Scheduled = "scheduled"
}


export class OrderFulfillmentsPickupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=accepted_at" })
  acceptedAt?: Date;

  @Metadata({ data: "json, name=auto_complete_duration" })
  autoCompleteDuration?: string;

  @Metadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @Metadata({ data: "json, name=canceled_at" })
  canceledAt?: Date;

  @Metadata({ data: "json, name=curbside_pickup_details" })
  curbsidePickupDetails?: OrderFulfillmentsPickupDetailsCurbsidePickupDetails;

  @Metadata({ data: "json, name=expired_at" })
  expiredAt?: Date;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "json, name=is_curbside_pickup" })
  isCurbsidePickup?: boolean;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=picked_up_at" })
  pickedUpAt?: Date;

  @Metadata({ data: "json, name=pickup_at" })
  pickupAt?: Date;

  @Metadata({ data: "json, name=pickup_window_duration" })
  pickupWindowDuration?: string;

  @Metadata({ data: "json, name=placed_at" })
  placedAt?: Date;

  @Metadata({ data: "json, name=prep_time_duration" })
  prepTimeDuration?: string;

  @Metadata({ data: "json, name=ready_at" })
  readyAt?: Date;

  @Metadata({ data: "json, name=recipient" })
  recipient?: OrderFulfillmentsPickupDetailsRecipient;

  @Metadata({ data: "json, name=rejected_at" })
  rejectedAt?: Date;

  @Metadata({ data: "json, name=schedule_type" })
  scheduleType?: OrderFulfillmentsPickupDetailsScheduleTypeEnum;
}

export enum OrderFulfillmentsFulfillmentStatusEnum {
    Proposed = "proposed"
,    Reserved = "reserved"
,    Prepared = "prepared"
,    Completed = "completed"
,    Cancelled = "cancelled"
,    Failed = "failed"
,    Other = "other"
}

export enum OrderFulfillmentsTypeEnum {
    Pickup = "pickup"
,    Shipment = "shipment"
}


export class OrderFulfillments extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pickup_details" })
  pickupDetails?: OrderFulfillmentsPickupDetails;

  @Metadata({ data: "json, name=shipment_details" })
  shipmentDetails?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: OrderFulfillmentsFulfillmentStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: OrderFulfillmentsTypeEnum;
}


export class OrderLineItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_discounts" })
  appliedDiscounts?: any[];

  @Metadata({ data: "json, name=applied_taxes" })
  appliedTaxes?: any[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=item" })
  item?: any;

  @Metadata({ data: "json, name=modifiers" })
  modifiers?: any[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @Metadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @Metadata({ data: "json, name=unit_price" })
  unitPrice?: number;
}

export enum OrderPosPaymentStatusEnum {
    Open = "open"
,    Paid = "paid"
,    Refunded = "refunded"
,    Credited = "credited"
,    PartiallyPaid = "partially_paid"
,    PartiallyRefunded = "partially_refunded"
,    Unknown = "unknown"
}


export class OrderPayments extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;
}

export enum OrderRefundsStatusEnum {
    Pending = "pending"
,    Approved = "approved"
,    Rejected = "rejected"
,    Failed = "failed"
}


export class OrderRefunds extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: OrderRefundsStatusEnum;

  @Metadata({ data: "json, name=tender_id" })
  tenderId?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;
}

export enum OrderSourceEnum {
    InStore = "in-store"
,    Online = "online"
,    Opt = "opt"
,    Api = "api"
,    Kiosk = "kiosk"
,    CallerId = "caller-id"
,    Google = "google"
,    Invoice = "invoice"
}

export enum OrderStatusEnum {
    Open = "open"
,    Draft = "draft"
,    Delivered = "delivered"
,    Delayed = "delayed"
,    Voided = "voided"
,    Completed = "completed"
,    Hidden = "hidden"
}

export enum OrderTendersCardEntryMethodEnum {
    Evm = "evm"
,    Swiped = "swiped"
,    Keyed = "keyed"
,    OnFile = "on-file"
,    Contactless = "contactless"
}

export enum OrderTendersCardStatusEnum {
    Authorized = "authorized"
,    Captured = "captured"
,    Failed = "failed"
,    Voided = "voided"
}

export enum OrderTendersTypeEnum {
    Cash = "cash"
,    Card = "card"
,    Other = "other"
}


export class OrderTenders extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=buyer_tendered_cash_amount" })
  buyerTenderedCashAmount?: number;

  @Metadata({ data: "json, name=card" })
  card?: PaymentCard;

  @Metadata({ data: "json, name=card_entry_method" })
  cardEntryMethod?: OrderTendersCardEntryMethodEnum;

  @Metadata({ data: "json, name=card_status" })
  cardStatus?: OrderTendersCardStatusEnum;

  @Metadata({ data: "json, name=change_back_cash_amount" })
  changeBackCashAmount?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @Metadata({ data: "json, name=total_processing_fee" })
  totalProcessingFee?: number;

  @Metadata({ data: "json, name=total_refund" })
  totalRefund?: number;

  @Metadata({ data: "json, name=total_service_charge" })
  totalServiceCharge?: number;

  @Metadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @Metadata({ data: "json, name=total_tip" })
  totalTip?: number;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId?: string;

  @Metadata({ data: "json, name=type" })
  type?: OrderTendersTypeEnum;
}


export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_date" })
  closedDate?: Date;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=customers", elemType: shared.OrderCustomers })
  customers?: OrderCustomers[];

  @Metadata({ data: "json, name=discounts", elemType: shared.OrderDiscounts })
  discounts?: OrderDiscounts[];

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=fulfillments", elemType: shared.OrderFulfillments })
  fulfillments?: OrderFulfillments[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=line_items", elemType: shared.OrderLineItems })
  lineItems?: OrderLineItems[];

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=order_date" })
  orderDate?: Date;

  @Metadata({ data: "json, name=order_number" })
  orderNumber?: string;

  @Metadata({ data: "json, name=order_type_id" })
  orderTypeId?: string;

  @Metadata({ data: "json, name=payment_status" })
  paymentStatus?: OrderPosPaymentStatusEnum;

  @Metadata({ data: "json, name=payments", elemType: shared.OrderPayments })
  payments?: OrderPayments[];

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=refunded" })
  refunded?: boolean;

  @Metadata({ data: "json, name=refunds", elemType: shared.OrderRefunds })
  refunds?: OrderRefunds[];

  @Metadata({ data: "json, name=seat" })
  seat?: string;

  @Metadata({ data: "json, name=service_charges", elemType: shared.ServiceCharge })
  serviceCharges?: ServiceCharge[];

  @Metadata({ data: "json, name=source" })
  source?: OrderSourceEnum;

  @Metadata({ data: "json, name=status" })
  status?: OrderStatusEnum;

  @Metadata({ data: "json, name=table" })
  table?: string;

  @Metadata({ data: "json, name=taxes" })
  taxes?: any[];

  @Metadata({ data: "json, name=tenders", elemType: shared.OrderTenders })
  tenders?: OrderTenders[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=total_amount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=total_discount" })
  totalDiscount?: number;

  @Metadata({ data: "json, name=total_refund" })
  totalRefund?: number;

  @Metadata({ data: "json, name=total_service_charge" })
  totalServiceCharge?: number;

  @Metadata({ data: "json, name=total_tax" })
  totalTax?: number;

  @Metadata({ data: "json, name=total_tip" })
  totalTip?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=voided" })
  voided?: boolean;

  @Metadata({ data: "json, name=voided_at" })
  voidedAt?: Date;
}
