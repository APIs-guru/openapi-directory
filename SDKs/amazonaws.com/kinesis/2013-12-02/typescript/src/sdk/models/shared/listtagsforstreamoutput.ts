import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// ListTagsForStreamOutput
/** 
 * Represents the output for <code>ListTagsForStream</code>.
**/
export class ListTagsForStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HasMoreTags" })
  hasMoreTags: boolean;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags: Tag[];
}
