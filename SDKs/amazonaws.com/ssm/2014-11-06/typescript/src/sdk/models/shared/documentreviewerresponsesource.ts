import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewCommentSource } from "./documentreviewcommentsource";
import { ReviewStatusEnum } from "./reviewstatusenum";



// DocumentReviewerResponseSource
/** 
 * Information about a reviewer's response to a document review request.
**/
export class DocumentReviewerResponseSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comment", elemType: DocumentReviewCommentSource })
  comment?: DocumentReviewCommentSource[];

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Reviewer" })
  reviewer?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;
}
