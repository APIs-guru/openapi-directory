import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterParameterGroup } from "./clusterparametergroup";
/**
 * Contains the output from the <a>DescribeClusterParameterGroups</a> action.
**/
export declare class ClusterParameterGroupsMessage extends SpeakeasyBase {
    marker?: string;
    parameterGroups?: ClusterParameterGroup[];
}
