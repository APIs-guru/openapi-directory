import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchRequestAction } from "./batchrequestaction";



// BatchRequest
/** 
 * A request object for use in a batch request.
**/
export class BatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: BatchRequestAction })
  actions?: BatchRequestAction[];
}
