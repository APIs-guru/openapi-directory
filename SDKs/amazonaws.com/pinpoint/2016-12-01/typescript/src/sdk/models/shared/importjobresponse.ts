import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResource } from "./importjobresource";
import { JobStatusEnum } from "./jobstatusenum";



// ImportJobResponse
/** 
 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
export class ImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=CompletedPieces" })
  completedPieces?: number;

  @SpeakeasyMetadata({ data: "json, name=CompletionDate" })
  completionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @SpeakeasyMetadata({ data: "json, name=Definition" })
  definition: ImportJobResource;

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
