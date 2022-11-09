import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Disk } from "./disk";


// InstanceHardware
/** 
 * Describes the hardware for the instance.
**/
export class InstanceHardware extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=disks", elemType: shared.Disk })
  disks?: Disk[];

  @Metadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;
}
