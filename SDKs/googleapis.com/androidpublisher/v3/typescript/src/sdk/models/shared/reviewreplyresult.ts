import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";



// ReviewReplyResult
/** 
 * The result of replying/updating a reply to review.
**/
export class ReviewReplyResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastEdited" })
  lastEdited?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=replyText" })
  replyText?: string;
}
