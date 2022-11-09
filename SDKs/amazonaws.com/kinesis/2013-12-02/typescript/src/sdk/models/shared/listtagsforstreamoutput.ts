import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// ListTagsForStreamOutput
/** 
 * Represents the output for <code>ListTagsForStream</code>.
**/
export class ListTagsForStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=HasMoreTags" })
  hasMoreTags: boolean;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags: Tag[];
}
