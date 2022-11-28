import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CopyNode } from "./copynode";


export enum CopyNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}


// CopyNodesRequest
/** 
 * Request model for copying nodes
**/
export class CopyNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CopyNode })
  items?: CopyNode[];

  @SpeakeasyMetadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: CopyNodesRequestResolutionStrategyEnum;
}
