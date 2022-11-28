import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceSnapshot } from "./instancesnapshot";
export declare class GetInstanceSnapshotsResult extends SpeakeasyBase {
    instanceSnapshots?: InstanceSnapshot[];
    nextPageToken?: string;
}
