import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MoveNode } from "./movenode";

export enum MoveNodesRequestResolutionStrategyEnum {
    Autorename = "autorename"
,    Overwrite = "overwrite"
,    Fail = "fail"
}


// MoveNodesRequest
/** 
 * Request model for moving nodes
**/
export class MoveNodesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.MoveNode })
  items?: MoveNode[];

  @Metadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @Metadata({ data: "json, name=nodeIds" })
  nodeIds?: number[];

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: MoveNodesRequestResolutionStrategyEnum;
}
