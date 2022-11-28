import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { HitLayoutParameter } from "./hitlayoutparameter";
export declare class CreateHitWithHitTypeRequest extends SpeakeasyBase {
    assignmentReviewPolicy?: ReviewPolicy;
    hitLayoutId?: string;
    hitLayoutParameters?: HitLayoutParameter[];
    hitReviewPolicy?: ReviewPolicy;
    hitTypeId: string;
    lifetimeInSeconds: number;
    maxAssignments?: number;
    question?: string;
    requesterAnnotation?: string;
    uniqueRequestToken?: string;
}
