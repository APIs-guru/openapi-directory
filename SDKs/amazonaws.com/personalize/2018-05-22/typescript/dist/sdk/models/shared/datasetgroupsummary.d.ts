import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API.
**/
export declare class DatasetGroupSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
