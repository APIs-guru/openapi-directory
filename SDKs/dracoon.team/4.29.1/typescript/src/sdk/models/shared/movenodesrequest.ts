import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoveNode } from "./movenode";


export enum MoveNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}


// MoveNodesRequest
/** 
 * Request model for moving nodes
**/
export class MoveNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: MoveNode })
  items?: MoveNode[];

  @SpeakeasyMetadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: MoveNodesRequestResolutionStrategyEnum;
}
