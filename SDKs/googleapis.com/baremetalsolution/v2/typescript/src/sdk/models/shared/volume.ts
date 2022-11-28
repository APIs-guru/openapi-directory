import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotReservationDetail } from "./snapshotreservationdetail";


export enum VolumeProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    FibreChannel = "FIBRE_CHANNEL",
    Nfs = "NFS"
}

export enum VolumePerformanceTierEnum {
    VolumePerformanceTierUnspecified = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED",
    VolumePerformanceTierShared = "VOLUME_PERFORMANCE_TIER_SHARED",
    VolumePerformanceTierAssigned = "VOLUME_PERFORMANCE_TIER_ASSIGNED",
    VolumePerformanceTierHt = "VOLUME_PERFORMANCE_TIER_HT"
}

export enum VolumeSnapshotAutoDeleteBehaviorEnum {
    SnapshotAutoDeleteBehaviorUnspecified = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED",
    Disabled = "DISABLED",
    OldestFirst = "OLDEST_FIRST",
    NewestFirst = "NEWEST_FIRST"
}

export enum VolumeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}

export enum VolumeStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED",
    Ssd = "SSD",
    Hdd = "HDD"
}


// Volume
/** 
 * A storage volume.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoGrownSizeGib" })
  autoGrownSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=bootVolume" })
  bootVolume?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currentSizeGib" })
  currentSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=emergencySizeGib" })
  emergencySizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxSizeGib" })
  maxSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=originallyRequestedSizeGib" })
  originallyRequestedSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=performanceTier" })
  performanceTier?: VolumePerformanceTierEnum;

  @SpeakeasyMetadata({ data: "json, name=pod" })
  pod?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: VolumeProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=remainingSpaceGib" })
  remainingSpaceGib?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedSizeGib" })
  requestedSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotAutoDeleteBehavior" })
  snapshotAutoDeleteBehavior?: VolumeSnapshotAutoDeleteBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=snapshotEnabled" })
  snapshotEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshotReservationDetail" })
  snapshotReservationDetail?: SnapshotReservationDetail;

  @SpeakeasyMetadata({ data: "json, name=snapshotSchedulePolicy" })
  snapshotSchedulePolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VolumeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType?: VolumeStorageTypeEnum;
}


// VolumeInput
/** 
 * A storage volume.
**/
export class VolumeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoGrownSizeGib" })
  autoGrownSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=currentSizeGib" })
  currentSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=emergencySizeGib" })
  emergencySizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxSizeGib" })
  maxSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=originallyRequestedSizeGib" })
  originallyRequestedSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=performanceTier" })
  performanceTier?: VolumePerformanceTierEnum;

  @SpeakeasyMetadata({ data: "json, name=pod" })
  pod?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingSpaceGib" })
  remainingSpaceGib?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedSizeGib" })
  requestedSizeGib?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotAutoDeleteBehavior" })
  snapshotAutoDeleteBehavior?: VolumeSnapshotAutoDeleteBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=snapshotEnabled" })
  snapshotEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=snapshotReservationDetail" })
  snapshotReservationDetail?: SnapshotReservationDetail;

  @SpeakeasyMetadata({ data: "json, name=snapshotSchedulePolicy" })
  snapshotSchedulePolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VolumeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=storageType" })
  storageType?: VolumeStorageTypeEnum;
}
