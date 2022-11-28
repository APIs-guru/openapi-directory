import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribedDownloadShare } from "./subscribeddownloadshare";
import { Range } from "./range";



// SubscribedDownloadShareList
/** 
 * List of subscribed download shares
**/
export class SubscribedDownloadShareList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SubscribedDownloadShare })
  items: SubscribedDownloadShare[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
