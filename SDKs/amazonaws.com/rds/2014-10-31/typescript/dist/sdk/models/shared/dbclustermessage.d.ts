import { SpeakeasyBase } from "../../../internal/utils";
import { DbCluster } from "./dbcluster";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
**/
export declare class DbClusterMessage extends SpeakeasyBase {
    dbClusters?: DbCluster[];
    marker?: string;
}
