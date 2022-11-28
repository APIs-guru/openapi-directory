import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EmployeesFilterEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}


export class EmployeesFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=employee_number" })
  employeeNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=employment_status" })
  employmentStatus?: EmployeesFilterEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=manager_id" })
  managerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=title" })
  title?: string;
}
