import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSubnetGroup } from "./clustersubnetgroup";
/**
 * Contains the output from the <a>DescribeClusterSubnetGroups</a> action.
**/
export declare class ClusterSubnetGroupMessage extends SpeakeasyBase {
    clusterSubnetGroups?: ClusterSubnetGroup[];
    marker?: string;
}
