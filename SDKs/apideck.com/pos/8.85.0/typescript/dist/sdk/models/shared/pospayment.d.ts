import { SpeakeasyBase } from "../../../internal/utils";
import { PosBankAccount } from "./posbankaccount";
import { PaymentCard } from "./paymentcard";
import { CurrencyEnum } from "./currencyenum";
import { ServiceCharge } from "./servicecharge";
import { PaymentCardInput } from "./paymentcard";
import { ServiceChargeInput } from "./servicecharge";
export declare class PosPaymentCardDetails extends SpeakeasyBase {
    card?: PaymentCard;
}
/**
 * Cash details for this payment
**/
export declare class PosPaymentCashDetails extends SpeakeasyBase {
    amount?: any;
    chargeBackAmount?: any;
}
export declare enum PosPaymentExternalDetailsTypeEnum {
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
/**
 * Details about an external payment.
**/
export declare class PosPaymentExternalDetails extends SpeakeasyBase {
    source: string;
    sourceFeeAmount?: number;
    sourceId?: string;
    type: PosPaymentExternalDetailsTypeEnum;
}
export declare enum PosPaymentSourceEnum {
    Card = "card",
    BankAccount = "bank_account",
    Wallet = "wallet",
    Bnpl = "bnpl",
    Cash = "cash",
    External = "external",
    Other = "other"
}
export declare enum PosPaymentStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Completed = "completed",
    Canceled = "canceled",
    Failed = "failed",
    Other = "other"
}
export declare enum PosPaymentWalletDetailsStatusEnum {
    Authorized = "authorized",
    Captured = "captured",
    Voided = "voided",
    Failed = "failed",
    Other = "other"
}
/**
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
**/
export declare class PosPaymentWalletDetails extends SpeakeasyBase {
    status?: PosPaymentWalletDetailsStatusEnum;
}
export declare class PosPaymentCardDetailsInput extends SpeakeasyBase {
    card?: PaymentCardInput;
}
export declare class PosPayment extends SpeakeasyBase {
    amount: number;
    appFee?: number;
    approved?: number;
    bankAccount?: PosBankAccount;
    cardDetails?: PosPaymentCardDetails;
    cash?: PosPaymentCashDetails;
    changeBackCashAmount?: number;
    createdAt?: Date;
    createdBy?: string;
    currency: CurrencyEnum;
    customerId: string;
    deviceId?: string;
    employeeId?: string;
    externalDetails?: PosPaymentExternalDetails;
    externalPaymentId?: string;
    id?: string;
    idempotencyKey?: string;
    locationId?: string;
    merchantId?: string;
    orderId: string;
    processingFees?: any[];
    refunded?: number;
    serviceCharges?: ServiceCharge[];
    source?: PosPaymentSourceEnum;
    sourceId: string;
    status?: PosPaymentStatusEnum;
    tax?: number;
    tenderId: string;
    tip?: number;
    total?: number;
    updatedAt?: Date;
    updatedBy?: string;
    wallet?: PosPaymentWalletDetails;
}
export declare class PosPaymentInput extends SpeakeasyBase {
    amount: number;
    appFee?: number;
    approved?: number;
    bankAccount?: PosBankAccount;
    cardDetails?: PosPaymentCardDetailsInput;
    cash?: PosPaymentCashDetails;
    changeBackCashAmount?: number;
    currency: CurrencyEnum;
    customerId: string;
    deviceId?: string;
    employeeId?: string;
    externalDetails?: PosPaymentExternalDetails;
    externalPaymentId?: string;
    idempotencyKey?: string;
    locationId?: string;
    merchantId?: string;
    orderId: string;
    processingFees?: any[];
    refunded?: number;
    serviceCharges?: ServiceChargeInput[];
    source?: PosPaymentSourceEnum;
    sourceId: string;
    status?: PosPaymentStatusEnum;
    tax?: number;
    tenderId: string;
    tip?: number;
    total?: number;
    wallet?: PosPaymentWalletDetails;
}
