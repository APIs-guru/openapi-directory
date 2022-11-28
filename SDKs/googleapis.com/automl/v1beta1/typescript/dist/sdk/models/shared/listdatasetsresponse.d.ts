import { SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
/**
 * Response message for AutoMl.ListDatasets.
**/
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasets?: Dataset[];
    nextPageToken?: string;
}
