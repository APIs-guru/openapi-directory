import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterVersion } from "./clusterversion";
/**
 * Contains the output from the <a>DescribeClusterVersions</a> action.
**/
export declare class ClusterVersionsMessage extends SpeakeasyBase {
    clusterVersions?: ClusterVersion[];
    marker?: string;
}
