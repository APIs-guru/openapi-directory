import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagFilter
/** 
 * Used to filter the workflow executions in visibility APIs based on a tag.
**/
export class TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag: string;
}
