import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Amount
/** 
 * A complex type that describes the value of a monetary amount as represented by a global currency.
**/
export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
