import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterSnapshot } from "./dbclustersnapshot";
export declare class DbClusterSnapshotMessage extends SpeakeasyBase {
    dbClusterSnapshots?: DbClusterSnapshot[];
    marker?: string;
}
