import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RestoreDeletedNodesRequestResolutionStrategyEnum {
    Autorename = "autorename",
    Overwrite = "overwrite",
    Fail = "fail"
}
/**
 * Request model for restoring deleted nodes
**/
export declare class RestoreDeletedNodesRequest extends SpeakeasyBase {
    deletedNodeIds: number[];
    keepShareLinks?: boolean;
    parentId?: number;
    resolutionStrategy?: RestoreDeletedNodesRequestResolutionStrategyEnum;
}
