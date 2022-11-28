import { SpeakeasyBase } from "../../../internal/utils";
import { TargetPlatformAcceleratorEnum } from "./targetplatformacceleratorenum";
import { TargetPlatformArchEnum } from "./targetplatformarchenum";
import { TargetPlatformOsEnum } from "./targetplatformosenum";
/**
 * Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.
**/
export declare class TargetPlatform extends SpeakeasyBase {
    accelerator?: TargetPlatformAcceleratorEnum;
    arch: TargetPlatformArchEnum;
    os: TargetPlatformOsEnum;
}
