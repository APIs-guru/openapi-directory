import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewCommentSource } from "./documentreviewcommentsource";
import { ReviewStatusEnum } from "./reviewstatusenum";
/**
 * Information about a reviewer's response to a document review request.
**/
export declare class DocumentReviewerResponseSource extends SpeakeasyBase {
    comment?: DocumentReviewCommentSource[];
    createTime?: Date;
    reviewStatus?: ReviewStatusEnum;
    reviewer?: string;
    updatedTime?: Date;
}
