import { SpeakeasyBase } from "../../../internal/utils";
import { CopyNode } from "./copynode";
export declare enum CopyNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for copying nodes
**/
export declare class CopyNodesRequest extends SpeakeasyBase {
    items?: CopyNode[];
    keepShareLinks?: boolean;
    nodeIds?: number[];
    resolutionStrategy?: CopyNodesRequestResolutionStrategyEnum;
}
