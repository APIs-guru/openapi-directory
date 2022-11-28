import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";



// InstanceHardware
/** 
 * Describes the hardware for the instance.
**/
export class InstanceHardware extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: Disk })
  disks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;
}
