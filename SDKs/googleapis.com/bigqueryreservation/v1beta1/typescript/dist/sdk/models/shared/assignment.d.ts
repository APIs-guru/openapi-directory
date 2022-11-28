import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AssignmentJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED",
    Pipeline = "PIPELINE",
    Query = "QUERY",
    MlExternal = "ML_EXTERNAL"
}
export declare enum AssignmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE"
}
/**
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
export declare class AssignmentInput extends SpeakeasyBase {
    assignee?: string;
    jobType?: AssignmentJobTypeEnum;
}
/**
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
**/
export declare class Assignment extends SpeakeasyBase {
    assignee?: string;
    jobType?: AssignmentJobTypeEnum;
    name?: string;
    state?: AssignmentStateEnum;
}
