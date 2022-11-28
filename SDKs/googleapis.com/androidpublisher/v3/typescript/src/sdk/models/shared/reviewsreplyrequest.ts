import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReviewsReplyRequest
/** 
 * Request to reply to review or update existing reply.
**/
export class ReviewsReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replyText" })
  replyText?: string;
}
