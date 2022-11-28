import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisputeAmount
/** 
 * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
**/
export class DisputeAmount extends SpeakeasyBase {
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
