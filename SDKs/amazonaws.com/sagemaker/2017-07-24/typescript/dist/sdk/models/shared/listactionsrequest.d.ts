import { SpeakeasyBase } from "../../../internal/utils";
import { SortActionsByEnum } from "./sortactionsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListActionsRequest extends SpeakeasyBase {
    actionType?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortActionsByEnum;
    sortOrder?: SortOrderEnum;
    sourceUri?: string;
}
