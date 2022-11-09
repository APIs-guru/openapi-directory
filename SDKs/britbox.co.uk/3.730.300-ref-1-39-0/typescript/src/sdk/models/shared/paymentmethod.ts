import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaymentMethodBrandEnum {
    Visa = "Visa"
,    MasterCard = "MasterCard"
,    AmericanExpress = "AmericanExpress"
,    Other = "Other"
}

export enum PaymentMethodTypeEnum {
    Card = "Card"
,    Wallet = "Wallet"
}


export class PaymentMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=brand" })
  brand?: PaymentMethodBrandEnum;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=expiryMonth" })
  expiryMonth?: number;

  @Metadata({ data: "json, name=expiryYear" })
  expiryYear?: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastDigits" })
  lastDigits?: number;

  @Metadata({ data: "json, name=type" })
  type: PaymentMethodTypeEnum;
}
