import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeOffRequestNotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee" })
  employee?: string;

  @Metadata({ data: "json, name=manager" })
  manager?: string;
}

export enum TimeOffRequestRequestTypeEnum {
    Vacaction = "vacaction"
,    Sick = "sick"
,    Personal = "personal"
,    JuryDuty = "jury_duty"
,    Volunteer = "volunteer"
,    Bereavement = "bereavement"
,    Other = "other"
}

export enum TimeOffRequestStatusEnum {
    Requested = "requested"
,    Approved = "approved"
,    Declined = "declined"
,    Cancelled = "cancelled"
,    Deleted = "deleted"
,    Other = "other"
}

export enum TimeOffRequestUnitsEnum {
    Days = "days"
,    Hours = "hours"
,    Other = "other"
}


export class TimeOffRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=approval_date" })
  approvalDate?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: TimeOffRequestNotes;

  @Metadata({ data: "json, name=policy_id" })
  policyId?: string;

  @Metadata({ data: "json, name=request_date" })
  requestDate?: string;

  @Metadata({ data: "json, name=request_type" })
  requestType?: TimeOffRequestRequestTypeEnum;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=status" })
  status?: TimeOffRequestStatusEnum;

  @Metadata({ data: "json, name=units" })
  units?: TimeOffRequestUnitsEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
