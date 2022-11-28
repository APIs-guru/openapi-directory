import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { HitLayoutParameter } from "./hitlayoutparameter";



export class CreateHitWithHitTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentReviewPolicy" })
  assignmentReviewPolicy?: ReviewPolicy;

  @SpeakeasyMetadata({ data: "json, name=HITLayoutId" })
  hitLayoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITLayoutParameters", elemType: HitLayoutParameter })
  hitLayoutParameters?: HitLayoutParameter[];

  @SpeakeasyMetadata({ data: "json, name=HITReviewPolicy" })
  hitReviewPolicy?: ReviewPolicy;

  @SpeakeasyMetadata({ data: "json, name=HITTypeId" })
  hitTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=LifetimeInSeconds" })
  lifetimeInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=MaxAssignments" })
  maxAssignments?: number;

  @SpeakeasyMetadata({ data: "json, name=Question" })
  question?: string;

  @SpeakeasyMetadata({ data: "json, name=RequesterAnnotation" })
  requesterAnnotation?: string;

  @SpeakeasyMetadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;
}
