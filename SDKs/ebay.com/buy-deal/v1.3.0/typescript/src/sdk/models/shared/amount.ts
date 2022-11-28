import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Amount
/** 
 * The currency and value of the item.
**/
export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
