import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentReviewActionEnum } from "./documentreviewactionenum";
import { DocumentReviewCommentSource } from "./documentreviewcommentsource";


// DocumentReviews
/** 
 * Information about a document approval review.
**/
export class DocumentReviews extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: DocumentReviewActionEnum;

  @Metadata({ data: "json, name=Comment", elemType: shared.DocumentReviewCommentSource })
  comment?: DocumentReviewCommentSource[];
}
