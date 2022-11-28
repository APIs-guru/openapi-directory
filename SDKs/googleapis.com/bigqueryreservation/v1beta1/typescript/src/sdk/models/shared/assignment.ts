import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AssignmentJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED",
    Pipeline = "PIPELINE",
    Query = "QUERY",
    MlExternal = "ML_EXTERNAL"
}

export enum AssignmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE"
}


// AssignmentInput
/** 
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
export class AssignmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: AssignmentJobTypeEnum;
}


// Assignment
/** 
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
export class Assignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: AssignmentJobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AssignmentStateEnum;
}
