import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=paymentAmount" })
  paymentAmount?: string;

  @Metadata({ data: "json, name=paymentAmountCurrencyCode" })
  paymentAmountCurrencyCode?: string;

  @Metadata({ data: "json, name=paymentDate" })
  paymentDate?: string;
}
