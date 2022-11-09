import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";
import { Range } from "./range";


// CommentList
/** 
 * List of node comments
**/
export class CommentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Comment })
  items: Comment[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
