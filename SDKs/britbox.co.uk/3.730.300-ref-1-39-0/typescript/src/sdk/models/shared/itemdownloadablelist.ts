import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemDownloadable } from "./itemdownloadable";



// ItemDownloadableList
/** 
 * A list of items downloadable data.
**/
export class ItemDownloadableList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: ItemDownloadable })
  items: ItemDownloadable[];
}
