import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobStatusEnum } from "./compilationjobstatusenum";
import { TargetDeviceEnum } from "./targetdeviceenum";
import { TargetPlatformAcceleratorEnum } from "./targetplatformacceleratorenum";
import { TargetPlatformArchEnum } from "./targetplatformarchenum";
import { TargetPlatformOsEnum } from "./targetplatformosenum";



// CompilationJobSummary
/** 
 * A summary of a model compilation job.
**/
export class CompilationJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompilationEndTime" })
  compilationEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CompilationJobArn" })
  compilationJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @SpeakeasyMetadata({ data: "json, name=CompilationJobStatus" })
  compilationJobStatus: CompilationJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CompilationStartTime" })
  compilationStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CompilationTargetDevice" })
  compilationTargetDevice?: TargetDeviceEnum;

  @SpeakeasyMetadata({ data: "json, name=CompilationTargetPlatformAccelerator" })
  compilationTargetPlatformAccelerator?: TargetPlatformAcceleratorEnum;

  @SpeakeasyMetadata({ data: "json, name=CompilationTargetPlatformArch" })
  compilationTargetPlatformArch?: TargetPlatformArchEnum;

  @SpeakeasyMetadata({ data: "json, name=CompilationTargetPlatformOs" })
  compilationTargetPlatformOs?: TargetPlatformOsEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
