import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";


// ProcessingJobSummary
/** 
 * Summary of information about a processing job.
**/
export class ProcessingJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=ExitMessage" })
  exitMessage?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ProcessingEndTime" })
  processingEndTime?: Date;

  @Metadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn: string;

  @Metadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;

  @Metadata({ data: "json, name=ProcessingJobStatus" })
  processingJobStatus: ProcessingJobStatusEnum;
}
