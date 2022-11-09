import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SimpleAmount
/** 
 * This type defines the monetary value of the payment dispute, and the currency used.
**/
export class SimpleAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
