import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Amount
/** 
 * The type that defines the fields for the currency and a monetary amount.
**/
export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
