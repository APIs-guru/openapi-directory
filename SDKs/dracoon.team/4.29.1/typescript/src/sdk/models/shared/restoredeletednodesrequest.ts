import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RestoreDeletedNodesRequestResolutionStrategyEnum {
    Autorename = "autorename"
,    Overwrite = "overwrite"
,    Fail = "fail"
}


// RestoreDeletedNodesRequest
/** 
 * Request model for restoring deleted nodes
**/
export class RestoreDeletedNodesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedNodeIds" })
  deletedNodeIds: number[];

  @Metadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: RestoreDeletedNodesRequestResolutionStrategyEnum;
}
