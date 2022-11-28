import { SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { TargetDeviceEnum } from "./targetdeviceenum";
import { TargetPlatformAcceleratorEnum } from "./targetplatformacceleratorenum";
import { TargetPlatformArchEnum } from "./targetplatformarchenum";
import { TargetPlatformOsEnum } from "./targetplatformosenum";
/**
 * A summary of a model compilation job.
**/
export declare class CompilationJobSummary extends SpeakeasyBase {
    compilationEndTime?: Date;
    compilationJobArn: string;
    compilationJobName: string;
    compilationJobStatus: CompilationJobStatusEnum;
    compilationStartTime?: Date;
    compilationTargetDevice?: TargetDeviceEnum;
    compilationTargetPlatformAccelerator?: TargetPlatformAcceleratorEnum;
    compilationTargetPlatformArch?: TargetPlatformArchEnum;
    compilationTargetPlatformOs?: TargetPlatformOsEnum;
    creationTime: Date;
    lastModifiedTime?: Date;
}
