import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeSnapshot } from "./volumesnapshot";
/**
 * Response message containing the list of volume snapshots.
**/
export declare class ListVolumeSnapshotsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    unreachable?: string[];
    volumeSnapshots?: VolumeSnapshot[];
}
