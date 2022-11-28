import { SpeakeasyBase } from "../../../internal/utils";
import { FailureInfo } from "./failureinfo";
import { ImportDataSource } from "./importdatasource";
import { ImportDestination } from "./importdestination";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
export declare class GetImportJobResponse extends SpeakeasyBase {
    completedTimestamp?: Date;
    createdTimestamp?: Date;
    failedRecordsCount?: number;
    failureInfo?: FailureInfo;
    importDataSource?: ImportDataSource;
    importDestination?: ImportDestination;
    jobId?: string;
    jobStatus?: JobStatusEnum;
    processedRecordsCount?: number;
}
