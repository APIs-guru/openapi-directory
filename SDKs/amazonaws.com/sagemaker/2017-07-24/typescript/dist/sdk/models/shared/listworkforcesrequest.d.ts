import { SpeakeasyBase } from "../../../internal/utils";
import { ListWorkforcesSortByOptionsEnum } from "./listworkforcessortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListWorkforcesRequest extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListWorkforcesSortByOptionsEnum;
    sortOrder?: SortOrderEnum;
}
