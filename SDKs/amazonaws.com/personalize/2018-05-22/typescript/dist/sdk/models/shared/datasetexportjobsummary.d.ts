import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a dataset export job. For a complete listing, call the <a>DescribeDatasetExportJob</a> API.
**/
export declare class DatasetExportJobSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetExportJobArn?: string;
    failureReason?: string;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    status?: string;
}
