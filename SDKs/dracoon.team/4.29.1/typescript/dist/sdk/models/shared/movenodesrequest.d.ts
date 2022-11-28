import { SpeakeasyBase } from "../../../internal/utils";
import { MoveNode } from "./movenode";
export declare enum MoveNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for moving nodes
**/
export declare class MoveNodesRequest extends SpeakeasyBase {
    items?: MoveNode[];
    keepShareLinks?: boolean;
    nodeIds?: number[];
    resolutionStrategy?: MoveNodesRequestResolutionStrategyEnum;
}
