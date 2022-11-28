import { SpeakeasyBase } from "../../../internal/utils";
import { ContinueWatchingListData } from "./continuewatchinglistdata";
/**
 * Extra data to accompany ItemList content. The (single) key in the object is
 * the list name and the data changes depending on the list
 *
**/
export declare class ListData extends SpeakeasyBase {
    continueWatching?: ContinueWatchingListData;
}
