import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagsModel
/** 
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
**/
export class TagsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
