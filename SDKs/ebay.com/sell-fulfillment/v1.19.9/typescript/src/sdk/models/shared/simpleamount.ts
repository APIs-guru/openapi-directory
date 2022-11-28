import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SimpleAmount
/** 
 * This type defines the monetary value of the payment dispute, and the currency used.
**/
export class SimpleAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
