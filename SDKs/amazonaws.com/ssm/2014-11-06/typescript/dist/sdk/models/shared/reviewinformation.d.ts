import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewStatusEnum } from "./reviewstatusenum";
/**
 * Information about the result of a document review request.
**/
export declare class ReviewInformation extends SpeakeasyBase {
    reviewedTime?: Date;
    reviewer?: string;
    status?: ReviewStatusEnum;
}
