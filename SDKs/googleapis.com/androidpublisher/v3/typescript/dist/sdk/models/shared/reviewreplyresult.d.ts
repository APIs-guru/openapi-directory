import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
/**
 * The result of replying/updating a reply to review.
**/
export declare class ReviewReplyResult extends SpeakeasyBase {
    lastEdited?: Timestamp;
    replyText?: string;
}
