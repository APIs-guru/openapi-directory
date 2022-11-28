import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetPlatformAcceleratorEnum } from "./targetplatformacceleratorenum";
import { TargetPlatformArchEnum } from "./targetplatformarchenum";
import { TargetPlatformOsEnum } from "./targetplatformosenum";



// TargetPlatform
/** 
 * Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.
**/
export class TargetPlatform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accelerator" })
  accelerator?: TargetPlatformAcceleratorEnum;

  @SpeakeasyMetadata({ data: "json, name=Arch" })
  arch: TargetPlatformArchEnum;

  @SpeakeasyMetadata({ data: "json, name=Os" })
  os: TargetPlatformOsEnum;
}
