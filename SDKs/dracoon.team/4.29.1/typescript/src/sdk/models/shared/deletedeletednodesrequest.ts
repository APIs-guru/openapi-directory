import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDeletedNodesRequest
/** 
 * Request model for deleting nodes from recycle bin
**/
export class DeleteDeletedNodesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedNodeIds" })
  deletedNodeIds: number[];
}
