import { SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
import { SortOrderEnum } from "./sortorderenum";
export declare class SearchProvisionedProductsInput extends SpeakeasyBase {
    acceptLanguage?: string;
    accessLevelFilter?: AccessLevelFilter;
    filters?: Map<string, string[]>;
    pageSize?: number;
    pageToken?: string;
    sortBy?: string;
    sortOrder?: SortOrderEnum;
}
