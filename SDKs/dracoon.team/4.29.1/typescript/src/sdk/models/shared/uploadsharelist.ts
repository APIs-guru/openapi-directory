import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadShare } from "./uploadshare";
import { Range } from "./range";



// UploadShareList
/** 
 * List of Upload Shares
**/
export class UploadShareList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UploadShare })
  items: UploadShare[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
