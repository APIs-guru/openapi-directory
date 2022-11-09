import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Client } from "./client";
import { Currency } from "./currency";
import { Invoice } from "./invoice";
import { PaymentLinkItem } from "./paymentlinkitem";
import { User } from "./user";


export class PaymentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=Client" })
  client?: Client;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: Currency;

  @Metadata({ data: "json, name=CurrencyId" })
  currencyId?: number;

  @Metadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Invoice" })
  invoice?: Invoice;

  @Metadata({ data: "json, name=Items", elemType: shared.PaymentLinkItem })
  items?: PaymentLinkItem[];

  @Metadata({ data: "json, name=Number" })
  number?: string;

  @Metadata({ data: "json, name=SubTotalAmount" })
  subTotalAmount?: number;

  @Metadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @Metadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @Metadata({ data: "json, name=User" })
  user?: User;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;
}
