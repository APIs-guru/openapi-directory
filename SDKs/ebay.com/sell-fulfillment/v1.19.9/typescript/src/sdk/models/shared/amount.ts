import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Amount
/** 
 * This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.
**/
export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=convertedFromCurrency" })
  convertedFromCurrency?: string;

  @Metadata({ data: "json, name=convertedFromValue" })
  convertedFromValue?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
