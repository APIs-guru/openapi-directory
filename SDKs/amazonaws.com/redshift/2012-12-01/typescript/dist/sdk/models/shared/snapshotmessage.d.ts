import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
/**
 * Contains the output from the <a>DescribeClusterSnapshots</a> action.
**/
export declare class SnapshotMessage extends SpeakeasyBase {
    marker?: string;
    snapshots?: Snapshot[];
}
