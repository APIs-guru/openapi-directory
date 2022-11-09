import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiskInfo } from "./diskinfo";


// InstanceSnapshotInfo
/** 
 * Describes an instance snapshot.
**/
export class InstanceSnapshotInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=fromBlueprintId" })
  fromBlueprintId?: string;

  @Metadata({ data: "json, name=fromBundleId" })
  fromBundleId?: string;

  @Metadata({ data: "json, name=fromDiskInfo", elemType: shared.DiskInfo })
  fromDiskInfo?: DiskInfo[];
}
