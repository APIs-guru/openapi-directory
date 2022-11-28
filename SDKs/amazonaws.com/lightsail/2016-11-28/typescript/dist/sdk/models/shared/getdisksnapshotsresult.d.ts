import { SpeakeasyBase } from "../../../internal/utils";
import { DiskSnapshot } from "./disksnapshot";
export declare class GetDiskSnapshotsResult extends SpeakeasyBase {
    diskSnapshots?: DiskSnapshot[];
    nextPageToken?: string;
}
