import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResource } from "./exportjobresource";
import { JobStatusEnum } from "./jobstatusenum";



// ExportJobResponse
/** 
 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
**/
export class ExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedPieces" })
  completedPieces?: number;

  @SpeakeasyMetadata({ data: "json, name=CompletionDate" })
  completionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition: ExportJobResource;

  @SpeakeasyMetadata({ data: "json, name=FailedPieces" })
  failedPieces?: number;

  @SpeakeasyMetadata({ data: "json, name=Failures" })
  failures?: string[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TotalFailures" })
  totalFailures?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalPieces" })
  totalPieces?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalProcessed" })
  totalProcessed?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
