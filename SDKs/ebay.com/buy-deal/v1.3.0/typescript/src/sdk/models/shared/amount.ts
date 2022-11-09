import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Amount
/** 
 * The currency and value of the item.
**/
export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
