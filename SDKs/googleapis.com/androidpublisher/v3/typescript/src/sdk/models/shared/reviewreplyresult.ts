import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Timestamp } from "./timestamp";


// ReviewReplyResult
/** 
 * The result of replying/updating a reply to review.
**/
export class ReviewReplyResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastEdited" })
  lastEdited?: Timestamp;

  @Metadata({ data: "json, name=replyText" })
  replyText?: string;
}
