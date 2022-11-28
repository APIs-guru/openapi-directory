import { SpeakeasyBase } from "../../../internal/utils";
import { ItemSummary } from "./itemsummary";
import { ItemList } from "./itemlist";
import { Person } from "./person";
export declare enum PageEntryTypeEnum {
    ItemEntry = "ItemEntry",
    ItemDetailEntry = "ItemDetailEntry",
    ListEntry = "ListEntry",
    ListDetailEntry = "ListDetailEntry",
    UserEntry = "UserEntry",
    TextEntry = "TextEntry",
    ImageEntry = "ImageEntry",
    CustomEntry = "CustomEntry",
    PeopleEntry = "PeopleEntry"
}
/**
 * Represents an entry of a Page.
 * Defines what specific piece of content should be presented e.g. an Item or ItemList.
 * Also defines what visual template should be used to render that content.
 *
**/
export declare class PageEntry extends SpeakeasyBase {
    customFields?: Map<string, any>;
    id: string;
    images?: Map<string, string>;
    item?: ItemSummary;
    list?: ItemList;
    people?: Person[];
    template: string;
    text?: string;
    title: string;
    type: PageEntryTypeEnum;
}
