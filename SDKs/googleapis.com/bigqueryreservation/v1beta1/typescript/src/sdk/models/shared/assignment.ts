import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AssignmentJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED"
,    Pipeline = "PIPELINE"
,    Query = "QUERY"
,    MlExternal = "ML_EXTERNAL"
}

export enum AssignmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Active = "ACTIVE"
}


// Assignment
/** 
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
export class Assignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignee" })
  assignee?: string;

  @Metadata({ data: "json, name=jobType" })
  jobType?: AssignmentJobTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: AssignmentStateEnum;
}
