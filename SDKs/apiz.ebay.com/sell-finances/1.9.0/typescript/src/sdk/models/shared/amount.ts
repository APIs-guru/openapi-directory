import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Amount
/** 
 * This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
**/
export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=convertedFromCurrency" })
  convertedFromCurrency?: string;

  @Metadata({ data: "json, name=convertedFromValue" })
  convertedFromValue?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=exchangeRate" })
  exchangeRate?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
