import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CopyNode } from "./copynode";

export enum CopyNodesRequestResolutionStrategyEnum {
    Autorename = "autorename"
,    Overwrite = "overwrite"
,    Fail = "fail"
}


// CopyNodesRequest
/** 
 * Request model for copying nodes
**/
export class CopyNodesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.CopyNode })
  items?: CopyNode[];

  @Metadata({ data: "json, name=keepShareLinks" })
  keepShareLinks?: boolean;

  @Metadata({ data: "json, name=nodeIds" })
  nodeIds?: number[];

  @Metadata({ data: "json, name=resolutionStrategy" })
  resolutionStrategy?: CopyNodesRequestResolutionStrategyEnum;
}
