import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReviewsReplyRequest
/** 
 * Request to reply to review or update existing reply.
**/
export class ReviewsReplyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=replyText" })
  replyText?: string;
}
