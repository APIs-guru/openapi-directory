import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDeviceEnum } from "./targetdeviceenum";
import { TargetPlatform } from "./targetplatform";
/**
 * Contains information about the output location for the compiled model and the target device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code> are mutually exclusive, so you need to choose one between the two to specify your target device or platform. If you cannot find your device you want to use from the <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the platform of your edge device and <code>CompilerOptions</code> if there are specific settings that are required or recommended to use for particular TargetPlatform.
**/
export declare class OutputConfig extends SpeakeasyBase {
    compilerOptions?: string;
    kmsKeyId?: string;
    s3OutputLocation: string;
    targetDevice?: TargetDeviceEnum;
    targetPlatform?: TargetPlatform;
}
