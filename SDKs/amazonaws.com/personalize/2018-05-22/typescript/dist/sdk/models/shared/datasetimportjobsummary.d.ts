import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.
**/
export declare class DatasetImportJobSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetImportJobArn?: string;
    failureReason?: string;
    jobName?: string;
    lastUpdatedDateTime?: Date;
    status?: string;
}
