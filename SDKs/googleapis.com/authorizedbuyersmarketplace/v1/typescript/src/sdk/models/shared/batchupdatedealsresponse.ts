import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";



// BatchUpdateDealsResponse
/** 
 * Response message for batch updating deals.
**/
export class BatchUpdateDealsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deals", elemType: Deal })
  deals?: Deal[];
}
