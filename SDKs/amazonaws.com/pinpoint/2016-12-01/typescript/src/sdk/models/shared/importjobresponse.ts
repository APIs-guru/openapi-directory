import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobResource } from "./importjobresource";
import { JobStatusEnum } from "./jobstatusenum";


// ImportJobResponse
/** 
 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
export class ImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=CompletedPieces" })
  completedPieces?: number;

  @Metadata({ data: "json, name=CompletionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=Definition" })
  definition: ImportJobResource;

  @Metadata({ data: "json, name=FailedPieces" })
  failedPieces?: number;

  @Metadata({ data: "json, name=Failures" })
  failures?: string[];

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus: JobStatusEnum;

  @Metadata({ data: "json, name=TotalFailures" })
  totalFailures?: number;

  @Metadata({ data: "json, name=TotalPieces" })
  totalPieces?: number;

  @Metadata({ data: "json, name=TotalProcessed" })
  totalProcessed?: number;

  @Metadata({ data: "json, name=Type" })
  type: string;
}
