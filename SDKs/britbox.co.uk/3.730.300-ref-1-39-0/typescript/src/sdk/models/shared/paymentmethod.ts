import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaymentMethodBrandEnum {
    Visa = "Visa",
    MasterCard = "MasterCard",
    AmericanExpress = "AmericanExpress",
    Other = "Other"
}

export enum PaymentMethodTypeEnum {
    Card = "Card",
    Wallet = "Wallet"
}


export class PaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: PaymentMethodBrandEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=expiryMonth" })
  expiryMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=expiryYear" })
  expiryYear?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastDigits" })
  lastDigits?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PaymentMethodTypeEnum;
}
