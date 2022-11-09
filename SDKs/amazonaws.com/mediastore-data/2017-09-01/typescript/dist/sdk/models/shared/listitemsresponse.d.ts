import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Item } from "./item";
export declare class ListItemsResponse extends SpeakeasyBase {
    items?: Item[];
    nextToken?: string;
}
