import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeOffRequestNotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: string;

  @SpeakeasyMetadata({ data: "json, name=manager" })
  manager?: string;
}

export enum TimeOffRequestRequestTypeEnum {
    Vacation = "vacation",
    Sick = "sick",
    Personal = "personal",
    JuryDuty = "jury_duty",
    Volunteer = "volunteer",
    Bereavement = "bereavement",
    Other = "other"
}

export enum TimeOffRequestStatusEnum {
    Requested = "requested",
    Approved = "approved",
    Declined = "declined",
    Cancelled = "cancelled",
    Deleted = "deleted",
    Other = "other"
}

export enum TimeOffRequestUnitsEnum {
    Days = "days",
    Hours = "hours",
    Other = "other"
}


export class TimeOffRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=approval_date" })
  approvalDate?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: TimeOffRequestNotes;

  @SpeakeasyMetadata({ data: "json, name=policy_id" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_date" })
  requestDate?: string;

  @SpeakeasyMetadata({ data: "json, name=request_type" })
  requestType?: TimeOffRequestRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TimeOffRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: TimeOffRequestUnitsEnum;
}


export class TimeOffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=approval_date" })
  approvalDate?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: TimeOffRequestNotes;

  @SpeakeasyMetadata({ data: "json, name=policy_id" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_date" })
  requestDate?: string;

  @SpeakeasyMetadata({ data: "json, name=request_type" })
  requestType?: TimeOffRequestRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TimeOffRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: TimeOffRequestUnitsEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
