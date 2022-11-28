import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDataSource } from "./customdatasource";
/**
 * Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.
**/
export declare class CustomDataSources extends SpeakeasyBase {
    items?: CustomDataSource[];
    itemsPerPage?: number;
    kind?: string;
    nextLink?: string;
    previousLink?: string;
    startIndex?: number;
    totalResults?: number;
    username?: string;
}
