import { SpeakeasyBase } from "../../../internal/utils";
import { ListWorkteamsSortByOptionsEnum } from "./listworkteamssortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListWorkteamsRequest extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListWorkteamsSortByOptionsEnum;
    sortOrder?: SortOrderEnum;
}
