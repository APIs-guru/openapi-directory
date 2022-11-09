import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemDownloadable } from "./itemdownloadable";


// ItemDownloadableList
/** 
 * A list of items downloadable data.
**/
export class ItemDownloadableList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.ItemDownloadable })
  items: ItemDownloadable[];
}
