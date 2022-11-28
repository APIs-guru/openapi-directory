import { SpeakeasyBase } from "../../../internal/utils";
import { SortExperimentsByEnum } from "./sortexperimentsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListExperimentsRequest extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortExperimentsByEnum;
    sortOrder?: SortOrderEnum;
}
