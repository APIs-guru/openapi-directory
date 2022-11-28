import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDeletedNodesRequest
/** 
 * Request model for deleting nodes from recycle bin
**/
export class DeleteDeletedNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedNodeIds" })
  deletedNodeIds: number[];
}
