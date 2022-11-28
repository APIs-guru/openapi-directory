import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VolumeSnapshotTypeEnum {
    SnapshotTypeUnspecified = "SNAPSHOT_TYPE_UNSPECIFIED",
    AdHoc = "AD_HOC",
    Scheduled = "SCHEDULED"
}


// VolumeSnapshot
/** 
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
export class VolumeSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=storageVolume" })
  storageVolume?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VolumeSnapshotTypeEnum;
}


// VolumeSnapshotInput
/** 
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
export class VolumeSnapshotInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
