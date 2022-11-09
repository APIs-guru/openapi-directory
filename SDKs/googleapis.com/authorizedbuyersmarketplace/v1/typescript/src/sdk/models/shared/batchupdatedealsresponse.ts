import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Deal } from "./deal";


// BatchUpdateDealsResponse
/** 
 * Response message for batch updating deals.
**/
export class BatchUpdateDealsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deals", elemType: shared.Deal })
  deals?: Deal[];
}
