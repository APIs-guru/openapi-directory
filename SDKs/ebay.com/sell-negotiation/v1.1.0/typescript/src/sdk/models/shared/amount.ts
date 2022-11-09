import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Amount
/** 
 * A complex type that describes the value of a monetary amount as represented by a global currency.
**/
export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
