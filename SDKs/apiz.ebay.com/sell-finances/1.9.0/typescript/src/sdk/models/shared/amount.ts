import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Amount
/** 
 * This type is used to express the dollar value and currency used for any transaction retrieved with the Finances API, including an order total, a seller payout, a buyer refund, or a seller credit.
**/
export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=convertedFromCurrency" })
  convertedFromCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=convertedFromValue" })
  convertedFromValue?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=exchangeRate" })
  exchangeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
