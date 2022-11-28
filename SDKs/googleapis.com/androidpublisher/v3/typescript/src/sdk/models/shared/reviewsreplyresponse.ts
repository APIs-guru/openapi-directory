import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewReplyResult } from "./reviewreplyresult";



// ReviewsReplyResponse
/** 
 * Response on status of replying to a review.
**/
export class ReviewsReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ReviewReplyResult;
}
