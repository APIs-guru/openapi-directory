import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides a summary of the properties of a dataset. For a complete listing, call the <a>DescribeDataset</a> API.
**/
export declare class DatasetSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetArn?: string;
    datasetType?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
