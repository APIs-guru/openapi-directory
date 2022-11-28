import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";



// ProcessingJobSummary
/** 
 * Summary of information about a processing job.
**/
export class ProcessingJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ExitMessage" })
  exitMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProcessingEndTime" })
  processingEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobName" })
  processingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobStatus" })
  processingJobStatus: ProcessingJobStatusEnum;
}
