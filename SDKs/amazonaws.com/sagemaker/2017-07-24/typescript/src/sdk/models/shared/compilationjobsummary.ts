import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CompilationEndTime" })
  compilationEndTime?: Date;

  @Metadata({ data: "json, name=CompilationJobArn" })
  compilationJobArn: string;

  @Metadata({ data: "json, name=CompilationJobName" })
  compilationJobName: string;

  @Metadata({ data: "json, name=CompilationJobStatus" })
  compilationJobStatus: CompilationJobStatusEnum;

  @Metadata({ data: "json, name=CompilationStartTime" })
  compilationStartTime?: Date;

  @Metadata({ data: "json, name=CompilationTargetDevice" })
  compilationTargetDevice?: TargetDeviceEnum;

  @Metadata({ data: "json, name=CompilationTargetPlatformAccelerator" })
  compilationTargetPlatformAccelerator?: TargetPlatformAcceleratorEnum;

  @Metadata({ data: "json, name=CompilationTargetPlatformArch" })
  compilationTargetPlatformArch?: TargetPlatformArchEnum;

  @Metadata({ data: "json, name=CompilationTargetPlatformOs" })
  compilationTargetPlatformOs?: TargetPlatformOsEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;
}
