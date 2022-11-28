import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
import { ImportDataSource } from "./importdatasource";
import { ImportDestination } from "./importdestination";
import { JobStatusEnum } from "./jobstatusenum";



// GetImportJobResponse
/** 
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
export class GetImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletedTimestamp" })
  completedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailedRecordsCount" })
  failedRecordsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=FailureInfo" })
  failureInfo?: FailureInfo;

  @SpeakeasyMetadata({ data: "json, name=ImportDataSource" })
  importDataSource?: ImportDataSource;

  @SpeakeasyMetadata({ data: "json, name=ImportDestination" })
  importDestination?: ImportDestination;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ProcessedRecordsCount" })
  processedRecordsCount?: number;
}
