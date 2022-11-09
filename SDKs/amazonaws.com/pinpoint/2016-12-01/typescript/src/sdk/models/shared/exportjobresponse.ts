import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExportJobResource } from "./exportjobresource";
import { JobStatusEnum } from "./jobstatusenum";


// ExportJobResponse
/** 
 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
**/
export class ExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=CompletedPieces" })
  completedPieces?: number;

  @Metadata({ data: "json, name=CompletionDate" })
  completionDate?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate: string;

  @Metadata({ data: "json, name=Definition" })
  definition: ExportJobResource;

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
