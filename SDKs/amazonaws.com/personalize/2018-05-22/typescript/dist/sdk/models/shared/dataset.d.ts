import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides metadata for a dataset.
**/
export declare class Dataset extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetArn?: string;
    datasetGroupArn?: string;
    datasetType?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    schemaArn?: string;
    status?: string;
}
