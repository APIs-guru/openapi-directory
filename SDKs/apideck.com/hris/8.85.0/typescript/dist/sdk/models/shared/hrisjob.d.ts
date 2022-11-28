import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HrisJobEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}
export declare class HrisJobLocation extends SpeakeasyBase {
    name?: string;
}
export declare class HrisJob extends SpeakeasyBase {
    department?: string;
    employeeId?: string;
    employmentStatus?: HrisJobEmploymentStatusEnum;
    endDate?: Date;
    id?: string;
    location?: HrisJobLocation;
    startDate?: Date;
    title?: string;
}
