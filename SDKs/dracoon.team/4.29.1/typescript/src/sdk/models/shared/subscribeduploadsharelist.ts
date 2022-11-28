import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscribedUploadShare } from "./subscribeduploadshare";
import { Range } from "./range";



// SubscribedUploadShareList
/** 
 * List of subscribed upload shares
**/
export class SubscribedUploadShareList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SubscribedUploadShare })
  items: SubscribedUploadShare[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
