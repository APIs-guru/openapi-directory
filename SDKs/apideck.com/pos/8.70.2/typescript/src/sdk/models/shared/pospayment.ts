import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PosBankAccount } from "./posbankaccount";
import { PaymentCard } from "./paymentcard";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";


export class PosPaymentCardDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card?: PaymentCard;
}


// PosPaymentCashDetails
/** 
 * Cash details for this payment
**/
export class PosPaymentCashDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: any;

  @Metadata({ data: "json, name=charge_back_amount" })
  chargeBackAmount?: any;
}

export enum PosPaymentExternalDetailsTypeEnum {
    Check = "check"
,    BankTransfer = "bank_transfer"
,    OtherGiftCard = "other_gift_card"
,    Crypto = "crypto"
,    SquareCash = "square_cash"
,    Social = "social"
,    External = "external"
,    Emoney = "emoney"
,    Card = "card"
,    StoredBalance = "stored_balance"
,    FoodVoucher = "food_voucher"
,    Other = "other"
}


// PosPaymentExternalDetails
/** 
 * Details about an external payment.
**/
export class PosPaymentExternalDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=source_fee_amount" })
  sourceFeeAmount?: number;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=type" })
  type: PosPaymentExternalDetailsTypeEnum;
}

export enum PosPaymentSourceEnum {
    Card = "card"
,    BankAccount = "bank_account"
,    Wallet = "wallet"
,    Bnpl = "bnpl"
,    Cash = "cash"
,    External = "external"
,    Other = "other"
}

export enum PosPaymentStatusEnum {
    Approved = "approved"
,    Pending = "pending"
,    Completed = "completed"
,    Canceled = "canceled"
,    Failed = "failed"
,    Other = "other"
}

export enum PosPaymentWalletDetailsStatusEnum {
    Authorized = "authorized"
,    Captured = "captured"
,    Voided = "voided"
,    Failed = "failed"
,    Other = "other"
}


// PosPaymentWalletDetails
/** 
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
**/
export class PosPaymentWalletDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: PosPaymentWalletDetailsStatusEnum;
}


export class PosPayment extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=app_fee" })
  appFee?: number;

  @Metadata({ data: "json, name=approved" })
  approved?: number;

  @Metadata({ data: "json, name=bank_account" })
  bankAccount?: PosBankAccount;

  @Metadata({ data: "json, name=card_details" })
  cardDetails?: PosPaymentCardDetails;

  @Metadata({ data: "json, name=cash" })
  cash?: PosPaymentCashDetails;

  @Metadata({ data: "json, name=change_back_cash_amount" })
  changeBackCashAmount?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency: CurrencyEnum;

  @Metadata({ data: "json, name=customer_id" })
  customerId: string;

  @Metadata({ data: "json, name=device_id" })
  deviceId?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=external_details" })
  externalDetails?: PosPaymentExternalDetails;

  @Metadata({ data: "json, name=external_payment_id" })
  externalPaymentId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId: string;

  @Metadata({ data: "json, name=processing_fees" })
  processingFees?: any[];

  @Metadata({ data: "json, name=refunded" })
  refunded?: number;

  @Metadata({ data: "json, name=service_charges", elemType: shared.ServiceCharge })
  serviceCharges?: ServiceCharge[];

  @Metadata({ data: "json, name=source" })
  source?: PosPaymentSourceEnum;

  @Metadata({ data: "json, name=source_id" })
  sourceId: string;

  @Metadata({ data: "json, name=status" })
  status?: PosPaymentStatusEnum;

  @Metadata({ data: "json, name=tax" })
  tax?: number;

  @Metadata({ data: "json, name=tender_id" })
  tenderId: string;

  @Metadata({ data: "json, name=tip" })
  tip?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=wallet" })
  wallet?: PosPaymentWalletDetails;
}
