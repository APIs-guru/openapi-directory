import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeOffRequestNotes extends SpeakeasyBase {
    employee?: string;
    manager?: string;
}
export declare enum TimeOffRequestRequestTypeEnum {
    Vacation = "vacation",
    Sick = "sick",
    Personal = "personal",
    JuryDuty = "jury_duty",
    Volunteer = "volunteer",
    Bereavement = "bereavement",
    Other = "other"
}
export declare enum TimeOffRequestStatusEnum {
    Requested = "requested",
    Approved = "approved",
    Declined = "declined",
    Cancelled = "cancelled",
    Deleted = "deleted",
    Other = "other"
}
export declare enum TimeOffRequestUnitsEnum {
    Days = "days",
    Hours = "hours",
    Other = "other"
}
export declare class TimeOffRequestInput extends SpeakeasyBase {
    amount?: number;
    approvalDate?: string;
    description?: string;
    employeeId?: string;
    endDate?: string;
    notes?: TimeOffRequestNotes;
    policyId?: string;
    requestDate?: string;
    requestType?: TimeOffRequestRequestTypeEnum;
    startDate?: string;
    status?: TimeOffRequestStatusEnum;
    units?: TimeOffRequestUnitsEnum;
}
export declare class TimeOffRequest extends SpeakeasyBase {
    amount?: number;
    approvalDate?: string;
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    employeeId?: string;
    endDate?: string;
    id?: string;
    notes?: TimeOffRequestNotes;
    policyId?: string;
    requestDate?: string;
    requestType?: TimeOffRequestRequestTypeEnum;
    startDate?: string;
    status?: TimeOffRequestStatusEnum;
    units?: TimeOffRequestUnitsEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
