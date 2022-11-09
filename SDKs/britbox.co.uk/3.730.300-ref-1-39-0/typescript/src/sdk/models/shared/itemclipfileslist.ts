import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemClipFiles } from "./itemclipfiles";


// ItemClipFilesList
/** 
 * A list of items with its clip files.
**/
export class ItemClipFilesList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ItemClipFiles })
  items: ItemClipFiles[];
}
