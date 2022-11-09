import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HrisJobEmploymentStatusEnum {
    Active = "active"
,    Inactive = "inactive"
,    Terminated = "terminated"
,    Other = "other"
}


export class HrisJobLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class HrisJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=department" })
  department?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=employment_status" })
  employmentStatus?: HrisJobEmploymentStatusEnum;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location" })
  location?: HrisJobLocation;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
