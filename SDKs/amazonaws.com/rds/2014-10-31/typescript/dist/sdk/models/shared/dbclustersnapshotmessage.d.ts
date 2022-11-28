import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";
/**
 *  Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.
**/
export declare class DbClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DbClusterSnapshot[];
    marker?: string;
}
