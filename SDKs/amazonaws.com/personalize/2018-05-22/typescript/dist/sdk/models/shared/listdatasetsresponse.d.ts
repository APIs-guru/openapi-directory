import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetSummary } from "./datasetsummary";
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasets?: DatasetSummary[];
    nextToken?: string;
}
