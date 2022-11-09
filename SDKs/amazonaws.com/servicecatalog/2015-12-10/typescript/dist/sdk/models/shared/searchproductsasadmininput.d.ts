import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductSourceEnum } from "./productsourceenum";
import { ProductViewSortByEnum } from "./productviewsortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class SearchProductsAsAdminInput extends SpeakeasyBase {
    acceptLanguage?: string;
    filters?: Map<string, string[]>;
    pageSize?: number;
    pageToken?: string;
    portfolioId?: string;
    productSource?: ProductSourceEnum;
    sortBy?: ProductViewSortByEnum;
    sortOrder?: SortOrderEnum;
}
