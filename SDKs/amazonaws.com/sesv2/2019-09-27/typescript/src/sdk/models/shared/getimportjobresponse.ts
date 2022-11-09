import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureInfo } from "./failureinfo";
import { ImportDataSource } from "./importdatasource";
import { ImportDestination } from "./importdestination";
import { JobStatusEnum } from "./jobstatusenum";


// GetImportJobResponse
/** 
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
export class GetImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompletedTimestamp" })
  completedTimestamp?: Date;

  @Metadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @Metadata({ data: "json, name=FailedRecordsCount" })
  failedRecordsCount?: number;

  @Metadata({ data: "json, name=FailureInfo" })
  failureInfo?: FailureInfo;

  @Metadata({ data: "json, name=ImportDataSource" })
  importDataSource?: ImportDataSource;

  @Metadata({ data: "json, name=ImportDestination" })
  importDestination?: ImportDestination;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=ProcessedRecordsCount" })
  processedRecordsCount?: number;
}
