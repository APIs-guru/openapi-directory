import { SpeakeasyBase } from "../../../internal/utils";
import { SubscribedDownloadShare } from "./subscribeddownloadshare";
import { Range } from "./range";
/**
 * List of subscribed download shares
**/
export declare class SubscribedDownloadShareList extends SpeakeasyBase {
    items: SubscribedDownloadShare[];
    range: Range;
}
