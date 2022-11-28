import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RestoreDeletedNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}


// RestoreDeletedNodesRequest
/** 
 * Request model for restoring deleted nodes
**/
export class RestoreDeletedNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedNodeIds" })
  deletedNodeIds: number[];

  @SpeakeasyMetadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: RestoreDeletedNodesRequestResolutionStrategyEnum;
}
