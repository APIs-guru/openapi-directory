import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteNodesRequest
/** 
 * Request model for deleting nodes
**/
export class DeleteNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds: number[];
}
