import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a resize cluster operation. For example, a scheduled action to run the <code>ResizeCluster</code> API operation.
**/
export declare class ResizeClusterMessage extends SpeakeasyBase {
    classic?: boolean;
    clusterIdentifier: string;
    clusterType?: string;
    nodeType?: string;
    numberOfNodes?: number;
}
