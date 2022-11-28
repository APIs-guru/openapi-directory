import { SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";
import { Person } from "./person";
export declare class SearchResults extends SpeakeasyBase {
    items?: ItemList;
    movies?: ItemList;
    other?: ItemList;
    people?: Person[];
    term: string;
    total: number;
    tv?: ItemList;
}
