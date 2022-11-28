import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskSnapshotInfo
/** 
 * Describes a disk snapshot.
**/
export class DiskSnapshotInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;
}
