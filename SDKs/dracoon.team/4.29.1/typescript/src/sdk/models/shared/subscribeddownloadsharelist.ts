import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscribedDownloadShare } from "./subscribeddownloadshare";
import { Range } from "./range";


// SubscribedDownloadShareList
/** 
 * List of subscribed download shares
**/
export class SubscribedDownloadShareList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SubscribedDownloadShare })
  items: SubscribedDownloadShare[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
