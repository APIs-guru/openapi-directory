import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimeOffRequestsFilterTimeOffRequestStatusEnum {
    Requested = "requested",
    Approved = "approved",
    Declined = "declined",
    Cancelled = "cancelled",
    Deleted = "deleted",
    Other = "other"
}


export class TimeOffRequestsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=time_off_request_status" })
  timeOffRequestStatus?: TimeOffRequestsFilterTimeOffRequestStatusEnum;
}
