import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseSnapshot } from "./relationaldatabasesnapshot";
export declare class GetRelationalDatabaseSnapshotsResult extends SpeakeasyBase {
    nextPageToken?: string;
    relationalDatabaseSnapshots?: RelationalDatabaseSnapshot[];
}
