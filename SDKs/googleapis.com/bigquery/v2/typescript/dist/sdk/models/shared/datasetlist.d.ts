import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetReference } from "./datasetreference";
export declare class DatasetListDatasets extends SpeakeasyBase {
    datasetReference?: DatasetReference;
    friendlyName?: string;
    id?: string;
    kind?: string;
    labels?: Map<string, string>;
    location?: string;
}
export declare class DatasetList extends SpeakeasyBase {
    datasets?: DatasetListDatasets[];
    etag?: string;
    kind?: string;
    nextPageToken?: string;
}
