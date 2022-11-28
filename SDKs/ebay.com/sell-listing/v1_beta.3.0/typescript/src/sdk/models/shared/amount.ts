import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Amount
/** 
 * The type that defines the fields for the currency and a monetary amount.
**/
export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
