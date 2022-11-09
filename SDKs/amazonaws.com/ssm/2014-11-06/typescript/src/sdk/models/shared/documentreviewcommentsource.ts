import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentReviewCommentTypeEnum } from "./documentreviewcommenttypeenum";


// DocumentReviewCommentSource
/** 
 * Information about comments added to a document review request.
**/
export class DocumentReviewCommentSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DocumentReviewCommentTypeEnum;
}
