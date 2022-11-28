import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewActionStatusEnum } from "./reviewactionstatusenum";
/**
 *  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.
**/
export declare class ReviewActionDetail extends SpeakeasyBase {
    actionId?: string;
    actionName?: string;
    completeTime?: Date;
    errorCode?: string;
    result?: string;
    status?: ReviewActionStatusEnum;
    targetId?: string;
    targetType?: string;
}
