import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotReservationDetail } from "./snapshotreservationdetail";
export declare enum VolumeProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    FibreChannel = "FIBRE_CHANNEL",
    Nfs = "NFS"
}
export declare enum VolumePerformanceTierEnum {
    VolumePerformanceTierUnspecified = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
    VolumePerformanceTierShared = "VOLUME_PERFORMANCE_TIER_SHARED",
    VolumePerformanceTierAssigned = "VOLUME_PERFORMANCE_TIER_ASSIGNED",
    VolumePerformanceTierHt = "VOLUME_PERFORMANCE_TIER_HT"
}
export declare enum VolumeSnapshotAutoDeleteBehaviorEnum {
    SnapshotAutoDeleteBehaviorUnspecified = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
    Disabled = "DISABLED",
    OldestFirst = "OLDEST_FIRST",
    NewestFirst = "NEWEST_FIRST"
}
export declare enum VolumeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
export declare enum VolumeStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}
/**
 * A storage volume.
**/
export declare class Volume extends SpeakeasyBase {
    autoGrownSizeGib?: string;
    bootVolume?: boolean;
    currentSizeGib?: string;
    emergencySizeGib?: string;
    id?: string;
    labels?: Map<string, string>;
    maxSizeGib?: string;
    name?: string;
    notes?: string;
    originallyRequestedSizeGib?: string;
    performanceTier?: VolumePerformanceTierEnum;
    pod?: string;
    protocol?: VolumeProtocolEnum;
    remainingSpaceGib?: string;
    requestedSizeGib?: string;
    snapshotAutoDeleteBehavior?: VolumeSnapshotAutoDeleteBehaviorEnum;
    snapshotEnabled?: boolean;
    snapshotReservationDetail?: SnapshotReservationDetail;
    snapshotSchedulePolicy?: string;
    state?: VolumeStateEnum;
    storageType?: VolumeStorageTypeEnum;
}
/**
 * A storage volume.
**/
export declare class VolumeInput extends SpeakeasyBase {
    autoGrownSizeGib?: string;
    currentSizeGib?: string;
    emergencySizeGib?: string;
    id?: string;
    labels?: Map<string, string>;
    maxSizeGib?: string;
    notes?: string;
    originallyRequestedSizeGib?: string;
    performanceTier?: VolumePerformanceTierEnum;
    pod?: string;
    remainingSpaceGib?: string;
    requestedSizeGib?: string;
    snapshotAutoDeleteBehavior?: VolumeSnapshotAutoDeleteBehaviorEnum;
    snapshotEnabled?: boolean;
    snapshotReservationDetail?: SnapshotReservationDetail;
    snapshotSchedulePolicy?: string;
    state?: VolumeStateEnum;
    storageType?: VolumeStorageTypeEnum;
}
