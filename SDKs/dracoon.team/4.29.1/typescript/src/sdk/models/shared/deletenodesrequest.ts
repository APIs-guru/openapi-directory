import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteNodesRequest
/** 
 * Request model for deleting nodes
**/
export class DeleteNodesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeIds" })
  nodeIds: number[];
}
