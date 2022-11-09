import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsResult
/** 
 * Contains the response to a <code>ListTags</code> request.
**/
export class ListTagsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
