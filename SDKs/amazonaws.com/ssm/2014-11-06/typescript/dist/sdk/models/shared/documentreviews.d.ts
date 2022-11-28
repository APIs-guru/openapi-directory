import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewActionEnum } from "./documentreviewactionenum";
import { DocumentReviewCommentSource } from "./documentreviewcommentsource";
/**
 * Information about a document approval review.
**/
export declare class DocumentReviews extends SpeakeasyBase {
    action: DocumentReviewActionEnum;
    comment?: DocumentReviewCommentSource[];
}
