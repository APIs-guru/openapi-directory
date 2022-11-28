import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsResult
/** 
 * Contains the response to a <code>ListTags</code> request.
**/
export class ListTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
