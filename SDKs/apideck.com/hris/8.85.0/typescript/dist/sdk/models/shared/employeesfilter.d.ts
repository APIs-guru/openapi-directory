import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmployeesFilterEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}
export declare class EmployeesFilter extends SpeakeasyBase {
    companyId?: string;
    email?: string;
    employeeNumber?: string;
    employmentStatus?: EmployeesFilterEmploymentStatusEnum;
    firstName?: string;
    lastName?: string;
    managerId?: string;
    title?: string;
}
