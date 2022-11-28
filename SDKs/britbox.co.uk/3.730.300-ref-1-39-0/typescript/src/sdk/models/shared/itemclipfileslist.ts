import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemClipFiles } from "./itemclipfiles";



// ItemClipFilesList
/** 
 * A list of items with its clip files.
**/
export class ItemClipFilesList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ItemClipFiles })
  items: ItemClipFiles[];
}
