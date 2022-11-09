import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReviewReplyResult } from "./reviewreplyresult";


// ReviewsReplyResponse
/** 
 * Response on status of replying to a review.
**/
export class ReviewsReplyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: ReviewReplyResult;
}
