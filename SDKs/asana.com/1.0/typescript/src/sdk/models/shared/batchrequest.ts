import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchRequestAction } from "./batchrequestaction";


// BatchRequest
/** 
 * A request object for use in a batch request.
**/
export class BatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.BatchRequestAction })
  actions?: BatchRequestAction[];
}
