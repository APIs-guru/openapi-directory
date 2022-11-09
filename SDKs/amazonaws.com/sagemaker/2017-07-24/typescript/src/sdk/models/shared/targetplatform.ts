import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TargetPlatformAcceleratorEnum } from "./targetplatformacceleratorenum";
import { TargetPlatformArchEnum } from "./targetplatformarchenum";
import { TargetPlatformOsEnum } from "./targetplatformosenum";


// TargetPlatform
/** 
 * Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.
**/
export class TargetPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accelerator" })
  accelerator?: TargetPlatformAcceleratorEnum;

  @Metadata({ data: "json, name=Arch" })
  arch: TargetPlatformArchEnum;

  @Metadata({ data: "json, name=Os" })
  os: TargetPlatformOsEnum;
}
