import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskSnapshotInfo
/** 
 * Describes a disk snapshot.
**/
export class DiskSnapshotInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;
}
