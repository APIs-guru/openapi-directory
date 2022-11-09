import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Comment } from "./comment";


// Review
/** 
 * An Android app review.
**/
export class Review extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorName" })
  authorName?: string;

  @Metadata({ data: "json, name=comments", elemType: shared.Comment })
  comments?: Comment[];

  @Metadata({ data: "json, name=reviewId" })
  reviewId?: string;
}
