import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewActionEnum } from "./documentreviewactionenum";
import { DocumentReviewCommentSource } from "./documentreviewcommentsource";



// DocumentReviews
/** 
 * Information about a document approval review.
**/
export class DocumentReviews extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: DocumentReviewActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Comment", elemType: DocumentReviewCommentSource })
  comment?: DocumentReviewCommentSource[];
}
