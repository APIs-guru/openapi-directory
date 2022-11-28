import { SpeakeasyBase } from "../../../internal/utils";
import { SubscribedUploadShare } from "./subscribeduploadshare";
import { Range } from "./range";
/**
 * List of subscribed upload shares
**/
export declare class SubscribedUploadShareList extends SpeakeasyBase {
    items: SubscribedUploadShare[];
    range: Range;
}
