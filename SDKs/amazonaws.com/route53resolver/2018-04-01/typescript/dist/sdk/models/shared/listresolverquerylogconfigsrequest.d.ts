import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListResolverQueryLogConfigsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: string;
    sortOrder?: SortOrderEnum;
}
