import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosBankAccount } from "./posbankaccount";
import { PaymentCard } from "./paymentcard";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";
import { PaymentCardInput } from "./paymentcard";
import { ServiceChargeInput } from "./servicecharge";



export class PosPaymentCardDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: PaymentCard;
}


// PosPaymentCashDetails
/** 
 * Cash details for this payment
**/
export class PosPaymentCashDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: any;

  @SpeakeasyMetadata({ data: "json, name=charge_back_amount" })
  chargeBackAmount?: any;
}

export enum PosPaymentExternalDetailsTypeEnum {
    Check = "check",
    BankTransfer = "bank_transfer",
    OtherGiftCard = "other_gift_card",
    Crypto = "crypto",
    SquareCash = "square_cash",
    Social = "social",
    External = "external",
    Emoney = "emoney",
    Card = "card",
    StoredBalance = "stored_balance",
    FoodVoucher = "food_voucher",
    Other = "other"
}


// PosPaymentExternalDetails
/** 
 * Details about an external payment.
**/
export class PosPaymentExternalDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=source_fee_amount" })
  sourceFeeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PosPaymentExternalDetailsTypeEnum;
}

export enum PosPaymentSourceEnum {
    Card = "card",
    BankAccount = "bank_account",
    Wallet = "wallet",
    Bnpl = "bnpl",
    Cash = "cash",
    External = "external",
    Other = "other"
}

export enum PosPaymentStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Completed = "completed",
    Canceled = "canceled",
    Failed = "failed",
    Other = "other"
}

export enum PosPaymentWalletDetailsStatusEnum {
    Authorized = "authorized",
    Captured = "captured",
    Voided = "voided",
    Failed = "failed",
    Other = "other"
}


// PosPaymentWalletDetails
/** 
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
**/
export class PosPaymentWalletDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PosPaymentWalletDetailsStatusEnum;
}


export class PosPaymentCardDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card" })
  card?: PaymentCardInput;
}


export class PosPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=app_fee" })
  appFee?: number;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: number;

  @SpeakeasyMetadata({ data: "json, name=bank_account" })
  bankAccount?: PosBankAccount;

  @SpeakeasyMetadata({ data: "json, name=card_details" })
  cardDetails?: PosPaymentCardDetails;

  @SpeakeasyMetadata({ data: "json, name=cash" })
  cash?: PosPaymentCashDetails;

  @SpeakeasyMetadata({ data: "json, name=change_back_cash_amount" })
  changeBackCashAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId: string;

  @SpeakeasyMetadata({ data: "json, name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_details" })
  externalDetails?: PosPaymentExternalDetails;

  @SpeakeasyMetadata({ data: "json, name=external_payment_id" })
  externalPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "json, name=processing_fees" })
  processingFees?: any[];

  @SpeakeasyMetadata({ data: "json, name=refunded" })
  refunded?: number;

  @SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceCharge })
  serviceCharges?: ServiceCharge[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: PosPaymentSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PosPaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=tender_id" })
  tenderId: string;

  @SpeakeasyMetadata({ data: "json, name=tip" })
  tip?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=wallet" })
  wallet?: PosPaymentWalletDetails;
}


export class PosPaymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=app_fee" })
  appFee?: number;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: number;

  @SpeakeasyMetadata({ data: "json, name=bank_account" })
  bankAccount?: PosBankAccount;

  @SpeakeasyMetadata({ data: "json, name=card_details" })
  cardDetails?: PosPaymentCardDetailsInput;

  @SpeakeasyMetadata({ data: "json, name=cash" })
  cash?: PosPaymentCashDetails;

  @SpeakeasyMetadata({ data: "json, name=change_back_cash_amount" })
  changeBackCashAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId: string;

  @SpeakeasyMetadata({ data: "json, name=device_id" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=external_details" })
  externalDetails?: PosPaymentExternalDetails;

  @SpeakeasyMetadata({ data: "json, name=external_payment_id" })
  externalPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "json, name=processing_fees" })
  processingFees?: any[];

  @SpeakeasyMetadata({ data: "json, name=refunded" })
  refunded?: number;

  @SpeakeasyMetadata({ data: "json, name=service_charges", elemType: ServiceChargeInput })
  serviceCharges?: ServiceChargeInput[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: PosPaymentSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PosPaymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=tender_id" })
  tenderId: string;

  @SpeakeasyMetadata({ data: "json, name=tip" })
  tip?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=wallet" })
  wallet?: PosPaymentWalletDetails;
}
