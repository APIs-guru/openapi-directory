import { SpeakeasyBase } from "../../../internal/utils";
import { SortContextsByEnum } from "./sortcontextsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListContextsRequest extends SpeakeasyBase {
    contextType?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortContextsByEnum;
    sortOrder?: SortOrderEnum;
    sourceUri?: string;
}
