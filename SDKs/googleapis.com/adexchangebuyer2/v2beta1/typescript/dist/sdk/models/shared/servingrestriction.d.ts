import { SpeakeasyBase } from "../../../internal/utils";
import { ServingContext } from "./servingcontext";
import { Disapproval } from "./disapproval";
export declare enum ServingRestrictionStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Disapproval = "DISAPPROVAL",
    PendingReview = "PENDING_REVIEW"
}
/**
 * Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
**/
export declare class ServingRestriction extends SpeakeasyBase {
    contexts?: ServingContext[];
    disapproval?: Disapproval;
    disapprovalReasons?: Disapproval[];
    status?: ServingRestrictionStatusEnum;
}
