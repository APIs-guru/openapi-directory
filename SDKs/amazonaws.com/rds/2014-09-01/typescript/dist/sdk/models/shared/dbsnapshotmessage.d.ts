import { SpeakeasyBase } from "../../../internal/utils";
import { DbSnapshot } from "./dbsnapshot";
export declare class DbSnapshotMessage extends SpeakeasyBase {
    dbSnapshots?: DbSnapshot[];
    marker?: string;
}
