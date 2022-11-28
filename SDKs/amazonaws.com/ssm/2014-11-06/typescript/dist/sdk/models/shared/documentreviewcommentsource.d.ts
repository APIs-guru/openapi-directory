import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewCommentTypeEnum } from "./documentreviewcommenttypeenum";
/**
 * Information about comments added to a document review request.
**/
export declare class DocumentReviewCommentSource extends SpeakeasyBase {
    content?: string;
    type?: DocumentReviewCommentTypeEnum;
}
