import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskInfo } from "./diskinfo";



// InstanceSnapshotInfo
/** 
 * Describes an instance snapshot.
**/
export class InstanceSnapshotInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromBlueprintId" })
  fromBlueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=fromBundleId" })
  fromBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDiskInfo", elemType: DiskInfo })
  fromDiskInfo?: DiskInfo[];
}
