import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Range } from "./range";



// CommentList
/** 
 * List of node comments
**/
export class CommentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Comment })
  items: Comment[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
