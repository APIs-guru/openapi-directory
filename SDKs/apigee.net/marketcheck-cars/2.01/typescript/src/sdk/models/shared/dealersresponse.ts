import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dealer } from "./dealer";



// DealersResponse
/** 
 * Dealers Response
**/
export class DealersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealers", elemType: Dealer })
  dealers?: Dealer[];

  @SpeakeasyMetadata({ data: "json, name=num_found" })
  numFound?: number;
}
