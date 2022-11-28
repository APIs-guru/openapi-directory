import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HitReviewStatusEnum } from "./hitreviewstatusenum";
import { HitStatusEnum } from "./hitstatusenum";
import { QualificationRequirement } from "./qualificationrequirement";



// Hit
/** 
 *  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
**/
export class Hit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentDurationInSeconds" })
  assignmentDurationInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=AutoApprovalDelayInSeconds" })
  autoApprovalDelayInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Expiration" })
  expiration?: Date;

  @SpeakeasyMetadata({ data: "json, name=HITGroupId" })
  hitGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITId" })
  hitId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITLayoutId" })
  hitLayoutId?: string;

  @SpeakeasyMetadata({ data: "json, name=HITReviewStatus" })
  hitReviewStatus?: HitReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=HITStatus" })
  hitStatus?: HitStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=HITTypeId" })
  hitTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxAssignments" })
  maxAssignments?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfAssignmentsAvailable" })
  numberOfAssignmentsAvailable?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfAssignmentsCompleted" })
  numberOfAssignmentsCompleted?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberOfAssignmentsPending" })
  numberOfAssignmentsPending?: number;

  @SpeakeasyMetadata({ data: "json, name=QualificationRequirements", elemType: QualificationRequirement })
  qualificationRequirements?: QualificationRequirement[];

  @SpeakeasyMetadata({ data: "json, name=Question" })
  question?: string;

  @SpeakeasyMetadata({ data: "json, name=RequesterAnnotation" })
  requesterAnnotation?: string;

  @SpeakeasyMetadata({ data: "json, name=Reward" })
  reward?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
