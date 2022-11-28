import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DownloadShare } from "./downloadshare";
import { Range } from "./range";



// DownloadShareList
/** 
 * List of Download Shares
**/
export class DownloadShareList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DownloadShare })
  items: DownloadShare[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
