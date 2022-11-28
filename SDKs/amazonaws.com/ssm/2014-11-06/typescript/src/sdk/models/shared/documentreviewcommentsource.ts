import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewCommentTypeEnum } from "./documentreviewcommenttypeenum";



// DocumentReviewCommentSource
/** 
 * Information about comments added to a document review request.
**/
export class DocumentReviewCommentSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DocumentReviewCommentTypeEnum;
}
