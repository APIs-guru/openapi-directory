import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { Currency } from "./currency";
import { Invoice } from "./invoice";
import { PaymentLinkItem } from "./paymentlinkitem";
import { User } from "./user";



export class PaymentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Client" })
  client?: Client;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: number;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: Currency;

  @SpeakeasyMetadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Invoice" })
  invoice?: Invoice;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: PaymentLinkItem })
  items?: PaymentLinkItem[];

  @SpeakeasyMetadata({ data: "json, name=Number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;
}
