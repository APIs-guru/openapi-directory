import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationDatasetReference } from "./destinationdatasetreference";
/**
 * Defines the destination bigquery dataset.
**/
export declare class DestinationDataset extends SpeakeasyBase {
    datasetReference?: DestinationDatasetReference;
    description?: string;
    friendlyName?: string;
    labels?: Map<string, string>;
    location?: string;
}
