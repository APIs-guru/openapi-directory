import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";


export enum PaymentCardCardBrandEnum {
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

export enum PaymentCardCardTypeEnum {
    Credit = "credit",
    Debit = "debit",
    Prepaid = "prepaid",
    Other = "other"
}

export enum PaymentCardPrepaidTypeEnum {
    NonPrepaid = "non-prepaid",
    Prepaid = "prepaid",
    Unknown = "unknown"
}


// PaymentCard
/** 
 * A card's non-confidential details.
**/
export class PaymentCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=bin" })
  bin?: string;

  @SpeakeasyMetadata({ data: "json, name=card_brand" })
  cardBrand?: PaymentCardCardBrandEnum;

  @SpeakeasyMetadata({ data: "json, name=card_type" })
  cardType?: PaymentCardCardTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cardholder_name" })
  cardholderName?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exp_month" })
  expMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=exp_year" })
  expYear?: number;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_4" })
  last4?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=prepaid_type" })
  prepaidType?: PaymentCardPrepaidTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// PaymentCardInput
/** 
 * A card's non-confidential details.
**/
export class PaymentCardInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @SpeakeasyMetadata({ data: "json, name=bin" })
  bin?: string;

  @SpeakeasyMetadata({ data: "json, name=card_brand" })
  cardBrand?: PaymentCardCardBrandEnum;

  @SpeakeasyMetadata({ data: "json, name=card_type" })
  cardType?: PaymentCardCardTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=cardholder_name" })
  cardholderName?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exp_month" })
  expMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=exp_year" })
  expYear?: number;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=last_4" })
  last4?: string;

  @SpeakeasyMetadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=prepaid_type" })
  prepaidType?: PaymentCardPrepaidTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
