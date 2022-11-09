import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentReviewCommentSource } from "./documentreviewcommentsource";
import { ReviewStatusEnum } from "./reviewstatusenum";


// DocumentReviewerResponseSource
/** 
 * Information about a reviewer's response to a document review request.
**/
export class DocumentReviewerResponseSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comment", elemType: shared.DocumentReviewCommentSource })
  comment?: DocumentReviewCommentSource[];

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: Date;

  @Metadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @Metadata({ data: "json, name=Reviewer" })
  reviewer?: string;

  @Metadata({ data: "json, name=UpdatedTime" })
  updatedTime?: Date;
}
