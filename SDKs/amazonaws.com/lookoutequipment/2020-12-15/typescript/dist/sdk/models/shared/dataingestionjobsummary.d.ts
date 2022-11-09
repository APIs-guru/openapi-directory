import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";
/**
 * Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status.
**/
export declare class DataIngestionJobSummary extends SpeakeasyBase {
    datasetArn?: string;
    datasetName?: string;
    ingestionInputConfiguration?: IngestionInputConfiguration;
    jobId?: string;
    status?: IngestionJobStatusEnum;
}
