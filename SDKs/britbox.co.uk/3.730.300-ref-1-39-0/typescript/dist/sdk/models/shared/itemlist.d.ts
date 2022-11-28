import { SpeakeasyBase } from "../../../internal/utils";
import { ItemSummary } from "./itemsummary";
import { ListData } from "./listdata";
import { Pagination } from "./pagination";
import { Theme } from "./theme";
export declare enum ItemListItemTypesEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
/**
 * A pageable list of items.
**/
export declare class ItemList extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    id: string;
    images?: Map<string, string>;
    itemTypes?: ItemListItemTypesEnum[];
    items: ItemSummary[];
    listData?: ListData;
    paging: Pagination;
    parameter?: string;
    path: string;
    shortDescription?: string;
    size: number;
    tagline?: string;
    themes?: Theme[];
    title?: string;
}
