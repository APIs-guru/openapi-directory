import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscribedUploadShare } from "./subscribeduploadshare";
import { Range } from "./range";


// SubscribedUploadShareList
/** 
 * List of subscribed upload shares
**/
export class SubscribedUploadShareList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SubscribedUploadShare })
  items: SubscribedUploadShare[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
