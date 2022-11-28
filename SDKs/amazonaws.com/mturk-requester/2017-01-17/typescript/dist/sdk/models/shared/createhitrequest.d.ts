import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { HitLayoutParameter } from "./hitlayoutparameter";
import { QualificationRequirement } from "./qualificationrequirement";
export declare class CreateHitRequest extends SpeakeasyBase {
    assignmentDurationInSeconds: number;
    assignmentReviewPolicy?: ReviewPolicy;
    autoApprovalDelayInSeconds?: number;
    description: string;
    hitLayoutId?: string;
    hitLayoutParameters?: HitLayoutParameter[];
    hitReviewPolicy?: ReviewPolicy;
    keywords?: string;
    lifetimeInSeconds: number;
    maxAssignments?: number;
    qualificationRequirements?: QualificationRequirement[];
    question?: string;
    requesterAnnotation?: string;
    reward: string;
    title: string;
    uniqueRequestToken?: string;
}
