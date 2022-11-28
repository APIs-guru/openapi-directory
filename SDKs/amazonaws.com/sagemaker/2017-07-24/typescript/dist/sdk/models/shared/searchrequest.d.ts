import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SearchExpression } from "./searchexpression";
import { SearchSortOrderEnum } from "./searchsortorderenum";
export declare class SearchRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resource: ResourceTypeEnum;
    searchExpression?: SearchExpression;
    sortBy?: string;
    sortOrder?: SearchSortOrderEnum;
}
