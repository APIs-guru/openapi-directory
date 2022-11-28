import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Department } from "./department";
import { CurrencyEnum } from "./currencyenum";
import { JobStatusEnum } from "./jobstatusenum";
/**
 * Details of the branch for which the job is created.
**/
export declare class JobBranch extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare enum JobEmploymentTermsEnum {
    FullTime = "full-time",
    PartTime = "part-time",
    Intership = "intership",
    Contractor = "contractor",
    Employee = "employee",
    Freelance = "freelance",
    Temp = "temp",
    Seasonal = "seasonal",
    Volunteer = "volunteer",
    Other = "other"
}
export declare class JobSalary extends SpeakeasyBase {
    currency?: CurrencyEnum;
    max?: number;
    min?: number;
}
export declare enum JobVisibilityEnum {
    Public = "public",
    Internal = "internal"
}
export declare class Job extends SpeakeasyBase {
    addresses?: Address[];
    availableToEmployees?: boolean;
    blocks?: any[];
    branch?: JobBranch;
    closing?: string;
    closingDate?: Date;
    closingHtml?: string;
    code?: string;
    confidential?: boolean;
    createdAt?: Date;
    createdBy?: string;
    deleted?: boolean;
    department?: Department;
    description?: string;
    descriptionHtml?: string;
    employmentTerms?: JobEmploymentTermsEnum;
    experience?: string;
    followers?: string[];
    hiringManagers?: any[];
    id?: string;
    jobPortalUrl?: string;
    language?: string;
    ownerId?: string;
    publishedAt?: Date;
    recordUrl?: string;
    recruiters?: string[];
    remote?: boolean;
    requisitionId?: string;
    salary?: JobSalary;
    sequence?: number;
    slug?: string;
    status?: JobStatusEnum;
    tags?: string[];
    title?: string;
    updatedAt?: Date;
    updatedBy?: string;
    url?: string;
    visibility?: JobVisibilityEnum;
}
