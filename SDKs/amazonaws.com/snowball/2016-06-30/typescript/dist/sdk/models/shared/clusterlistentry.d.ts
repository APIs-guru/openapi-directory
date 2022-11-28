import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterStateEnum } from "./clusterstateenum";
/**
 * Contains a cluster's state, a cluster's ID, and other important information.
**/
export declare class ClusterListEntry extends SpeakeasyBase {
    clusterId?: string;
    clusterState?: ClusterStateEnum;
    creationDate?: Date;
    description?: string;
}
