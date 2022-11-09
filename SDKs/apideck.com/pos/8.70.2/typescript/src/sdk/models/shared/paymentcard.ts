import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";

export enum PaymentCardCardBrandEnum {
    Visa = "visa"
,    Mastercard = "mastercard"
,    Amex = "amex"
,    Discover = "discover"
,    DiscoverDiners = "discover-diners"
,    Jcb = "jcb"
,    ChinaUnionpay = "china-unionpay"
,    SquareGiftCard = "square-gift-card"
,    SquareCapitalCard = "square-capital-card"
,    Interac = "interac"
,    Eftpos = "eftpos"
,    Felica = "felica"
,    Ebt = "ebt"
,    Other = "other"
}

export enum PaymentCardCardTypeEnum {
    Credit = "credit"
,    Debit = "debit"
,    Prepaid = "prepaid"
,    Other = "other"
}

export enum PaymentCardPrepaidTypeEnum {
    NonPrepaid = "non-prepaid"
,    Prepaid = "prepaid"
,    Unknown = "unknown"
}


// PaymentCard
/** 
 * A card's non-confidential details.
**/
export class PaymentCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @Metadata({ data: "json, name=bin" })
  bin?: string;

  @Metadata({ data: "json, name=card_brand" })
  cardBrand?: PaymentCardCardBrandEnum;

  @Metadata({ data: "json, name=card_type" })
  cardType?: PaymentCardCardTypeEnum;

  @Metadata({ data: "json, name=cardholder_name" })
  cardholderName?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=exp_month" })
  expMonth?: number;

  @Metadata({ data: "json, name=exp_year" })
  expYear?: number;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_4" })
  last4?: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=prepaid_type" })
  prepaidType?: PaymentCardPrepaidTypeEnum;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
