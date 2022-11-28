import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Contains the output from the <a>DescribeClusterParameters</a> action.
**/
export declare class ClusterParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: Parameter[];
}
