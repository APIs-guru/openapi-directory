import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetSummary } from "./datasetsummary";
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasetSummaries?: DatasetSummary[];
    nextToken?: string;
}
