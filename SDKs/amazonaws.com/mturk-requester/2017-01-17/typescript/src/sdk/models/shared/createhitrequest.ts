import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { HitLayoutParameter } from "./hitlayoutparameter";
import { QualificationRequirement } from "./qualificationrequirement";



export class CreateHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentDurationInSeconds" })
  assignmentDurationInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=AssignmentReviewPolicy" })
  assignmentReviewPolicy?: ReviewPolicy;

  @SpeakeasyMetadata({ data: "json, name=AutoApprovalDelayInSeconds" })
  autoApprovalDelayInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=HITLayoutId" })
  hitLayoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITLayoutParameters", elemType: HitLayoutParameter })
  hitLayoutParameters?: HitLayoutParameter[];

  @SpeakeasyMetadata({ data: "json, name=HITReviewPolicy" })
  hitReviewPolicy?: ReviewPolicy;

  @SpeakeasyMetadata({ data: "json, name=Keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=LifetimeInSeconds" })
  lifetimeInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=MaxAssignments" })
  maxAssignments?: number;

  @SpeakeasyMetadata({ data: "json, name=QualificationRequirements", elemType: QualificationRequirement })
  qualificationRequirements?: QualificationRequirement[];

  @SpeakeasyMetadata({ data: "json, name=Question" })
  question?: string;

  @SpeakeasyMetadata({ data: "json, name=RequesterAnnotation" })
  requesterAnnotation?: string;

  @SpeakeasyMetadata({ data: "json, name=Reward" })
  reward: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;
}
