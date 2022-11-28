import { SpeakeasyBase } from "../../../internal/utils";
import { DiskInfo } from "./diskinfo";
/**
 * Describes an instance snapshot.
**/
export declare class InstanceSnapshotInfo extends SpeakeasyBase {
    fromBlueprintId?: string;
    fromBundleId?: string;
    fromDiskInfo?: DiskInfo[];
}
