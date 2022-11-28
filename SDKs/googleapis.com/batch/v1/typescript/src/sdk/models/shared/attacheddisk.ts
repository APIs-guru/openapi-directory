import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";



// AttachedDisk
/** 
 * A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
**/
export class AttachedDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=existingDisk" })
  existingDisk?: string;

  @SpeakeasyMetadata({ data: "json, name=newDisk" })
  newDisk?: Disk;
}
