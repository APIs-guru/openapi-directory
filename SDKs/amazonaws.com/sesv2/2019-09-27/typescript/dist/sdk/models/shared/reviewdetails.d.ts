import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewStatusEnum } from "./reviewstatusenum";
/**
 * An object that contains information about your account details review.
**/
export declare class ReviewDetails extends SpeakeasyBase {
    caseId?: string;
    status?: ReviewStatusEnum;
}
