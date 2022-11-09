import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DownloadShare } from "./downloadshare";
import { Range } from "./range";


// DownloadShareList
/** 
 * List of Download Shares
**/
export class DownloadShareList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DownloadShare })
  items: DownloadShare[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
