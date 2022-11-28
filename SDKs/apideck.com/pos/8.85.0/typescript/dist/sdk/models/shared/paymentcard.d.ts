import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare enum PaymentCardCardBrandEnum {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    DiscoverDiners = "discover-diners",
    Jcb = "jcb",
    ChinaUnionpay = "china-unionpay",
    SquareGiftCard = "square-gift-card",
    SquareCapitalCard = "square-capital-card",
    Interac = "interac",
    Eftpos = "eftpos",
    Felica = "felica",
    Ebt = "ebt",
    Other = "other"
}
export declare enum PaymentCardCardTypeEnum {
    Credit = "credit",
    Debit = "debit",
    Prepaid = "prepaid",
    Other = "other"
}
export declare enum PaymentCardPrepaidTypeEnum {
    NonPrepaid = "non-prepaid",
    Prepaid = "prepaid",
    Unknown = "unknown"
}
/**
 * A card's non-confidential details.
**/
export declare class PaymentCard extends SpeakeasyBase {
    billingAddress?: Address;
    bin?: string;
    cardBrand?: PaymentCardCardBrandEnum;
    cardType?: PaymentCardCardTypeEnum;
    cardholderName?: string;
    customerId?: string;
    enabled?: boolean;
    expMonth?: number;
    expYear?: number;
    fingerprint?: string;
    id?: string;
    last4?: string;
    merchantId?: string;
    prepaidType?: PaymentCardPrepaidTypeEnum;
    referenceId?: string;
    version?: string;
}
/**
 * A card's non-confidential details.
**/
export declare class PaymentCardInput extends SpeakeasyBase {
    billingAddress?: Address;
    bin?: string;
    cardBrand?: PaymentCardCardBrandEnum;
    cardType?: PaymentCardCardTypeEnum;
    cardholderName?: string;
    customerId?: string;
    enabled?: boolean;
    expMonth?: number;
    expYear?: number;
    fingerprint?: string;
    last4?: string;
    merchantId?: string;
    prepaidType?: PaymentCardPrepaidTypeEnum;
    referenceId?: string;
    version?: string;
}
