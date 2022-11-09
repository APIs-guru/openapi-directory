import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReviewPolicy } from "./reviewpolicy";
import { HitLayoutParameter } from "./hitlayoutparameter";
import { ReviewPolicy } from "./reviewpolicy";


export class CreateHitWithHitTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentReviewPolicy" })
  assignmentReviewPolicy?: ReviewPolicy;

  @Metadata({ data: "json, name=HITLayoutId" })
  hitLayoutId?: string;

  @Metadata({ data: "json, name=HITLayoutParameters", elemType: shared.HitLayoutParameter })
  hitLayoutParameters?: HitLayoutParameter[];

  @Metadata({ data: "json, name=HITReviewPolicy" })
  hitReviewPolicy?: ReviewPolicy;

  @Metadata({ data: "json, name=HITTypeId" })
  hitTypeId: string;

  @Metadata({ data: "json, name=LifetimeInSeconds" })
  lifetimeInSeconds: number;

  @Metadata({ data: "json, name=MaxAssignments" })
  maxAssignments?: number;

  @Metadata({ data: "json, name=Question" })
  question?: string;

  @Metadata({ data: "json, name=RequesterAnnotation" })
  requesterAnnotation?: string;

  @Metadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;
}
