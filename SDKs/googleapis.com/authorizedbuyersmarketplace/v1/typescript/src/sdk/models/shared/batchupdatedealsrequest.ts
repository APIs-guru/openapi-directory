import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateDealRequest } from "./updatedealrequest";


// BatchUpdateDealsRequest
/** 
 * Request message for batch updating deals.
**/
export class BatchUpdateDealsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.UpdateDealRequest })
  requests?: UpdateDealRequest[];
}
