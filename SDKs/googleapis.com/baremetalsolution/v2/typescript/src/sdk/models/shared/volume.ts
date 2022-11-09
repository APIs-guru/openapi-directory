import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotReservationDetail } from "./snapshotreservationdetail";

export enum VolumePerformanceTierEnum {
    VolumePerformanceTierUnspecified = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED"
,    VolumePerformanceTierShared = "VOLUME_PERFORMANCE_TIER_SHARED"
,    VolumePerformanceTierAssigned = "VOLUME_PERFORMANCE_TIER_ASSIGNED"
,    VolumePerformanceTierHt = "VOLUME_PERFORMANCE_TIER_HT"
}

export enum VolumeProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED"
,    FibreChannel = "FIBRE_CHANNEL"
,    Nfs = "NFS"
}

export enum VolumeSnapshotAutoDeleteBehaviorEnum {
    SnapshotAutoDeleteBehaviorUnspecified = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED"
,    Disabled = "DISABLED"
,    OldestFirst = "OLDEST_FIRST"
,    NewestFirst = "NEWEST_FIRST"
}

export enum VolumeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}

export enum VolumeStorageTypeEnum {
    StorageTypeUnspecified = "STORAGE_TYPE_UNSPECIFIED"
,    Ssd = "SSD"
,    Hdd = "HDD"
}


// Volume
/** 
 * A storage volume.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoGrownSizeGib" })
  autoGrownSizeGib?: string;

  @Metadata({ data: "json, name=bootVolume" })
  bootVolume?: boolean;

  @Metadata({ data: "json, name=currentSizeGib" })
  currentSizeGib?: string;

  @Metadata({ data: "json, name=emergencySizeGib" })
  emergencySizeGib?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=maxSizeGib" })
  maxSizeGib?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=originallyRequestedSizeGib" })
  originallyRequestedSizeGib?: string;

  @Metadata({ data: "json, name=performanceTier" })
  performanceTier?: VolumePerformanceTierEnum;

  @Metadata({ data: "json, name=pod" })
  pod?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: VolumeProtocolEnum;

  @Metadata({ data: "json, name=remainingSpaceGib" })
  remainingSpaceGib?: string;

  @Metadata({ data: "json, name=requestedSizeGib" })
  requestedSizeGib?: string;

  @Metadata({ data: "json, name=snapshotAutoDeleteBehavior" })
  snapshotAutoDeleteBehavior?: VolumeSnapshotAutoDeleteBehaviorEnum;

  @Metadata({ data: "json, name=snapshotEnabled" })
  snapshotEnabled?: boolean;

  @Metadata({ data: "json, name=snapshotReservationDetail" })
  snapshotReservationDetail?: SnapshotReservationDetail;

  @Metadata({ data: "json, name=snapshotSchedulePolicy" })
  snapshotSchedulePolicy?: string;

  @Metadata({ data: "json, name=state" })
  state?: VolumeStateEnum;

  @Metadata({ data: "json, name=storageType" })
  storageType?: VolumeStorageTypeEnum;
}
