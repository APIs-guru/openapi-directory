import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VolumeSnapshotTypeEnum {
    SnapshotTypeUnspecified = "SNAPSHOT_TYPE_UNSPECIFIED",
    AdHoc = "AD_HOC",
    Scheduled = "SCHEDULED"
}
/**
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
export declare class VolumeSnapshot extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    id?: string;
    name?: string;
    storageVolume?: string;
    type?: VolumeSnapshotTypeEnum;
}
/**
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
export declare class VolumeSnapshotInput extends SpeakeasyBase {
    description?: string;
    name?: string;
}
