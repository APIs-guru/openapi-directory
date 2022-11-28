import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



// Review
/** 
 * An Android app review.
**/
export class Review extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorName" })
  authorName?: string;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: Comment })
  comments?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=reviewId" })
  reviewId?: string;
}
