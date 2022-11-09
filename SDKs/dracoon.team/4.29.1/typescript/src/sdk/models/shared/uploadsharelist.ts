import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UploadShare } from "./uploadshare";
import { Range } from "./range";


// UploadShareList
/** 
 * List of Upload Shares
**/
export class UploadShareList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UploadShare })
  items: UploadShare[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
