import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSortByEnum } from "./productviewsortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class SearchProductsInput extends SpeakeasyBase {
    acceptLanguage?: string;
    filters?: Map<string, string[]>;
    pageSize?: number;
    pageToken?: string;
    sortBy?: ProductViewSortByEnum;
    sortOrder?: SortOrderEnum;
}
