import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HrisJobEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}


export class HrisJobLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class HrisJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_status" })
  employmentStatus?: HrisJobEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: HrisJobLocation;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
