import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EmployeesFilterEmploymentStatusEnum {
    Active = "active"
,    Inactive = "inactive"
,    Terminated = "terminated"
,    Other = "other"
}


export class EmployeesFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=company_id" })
  companyId?: string;

  @Metadata({ data: "queryParam, name=email" })
  email?: string;

  @Metadata({ data: "queryParam, name=employee_number" })
  employeeNumber?: string;

  @Metadata({ data: "queryParam, name=employment_status" })
  employmentStatus?: EmployeesFilterEmploymentStatusEnum;

  @Metadata({ data: "queryParam, name=first_name" })
  firstName?: string;

  @Metadata({ data: "queryParam, name=last_name" })
  lastName?: string;

  @Metadata({ data: "queryParam, name=manager_id" })
  managerId?: string;

  @Metadata({ data: "queryParam, name=title" })
  title?: string;
}
