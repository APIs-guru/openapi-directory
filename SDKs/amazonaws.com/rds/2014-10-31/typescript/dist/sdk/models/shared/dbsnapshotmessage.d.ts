import { SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";
/**
 *  Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
**/
export declare class DbSnapshotMessage extends SpeakeasyBase {
    dbSnapshots?: DbSnapshot[];
    marker?: string;
}
