import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagsModel
/** 
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
**/
export class TagsModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
