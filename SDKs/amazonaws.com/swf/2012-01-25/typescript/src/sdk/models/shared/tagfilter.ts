import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilter
/** 
 * Used to filter the workflow executions in visibility APIs based on a tag.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag: string;
}
