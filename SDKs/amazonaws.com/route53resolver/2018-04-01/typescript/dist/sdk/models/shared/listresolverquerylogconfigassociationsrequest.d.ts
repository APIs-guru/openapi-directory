import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListResolverQueryLogConfigAssociationsRequest extends SpeakeasyBase {
    filters?: Filter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: string;
    sortOrder?: SortOrderEnum;
}
