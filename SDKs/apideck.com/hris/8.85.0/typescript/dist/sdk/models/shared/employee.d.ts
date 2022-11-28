import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { PaymentUnitEnum } from "./paymentunitenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { GenderEnum } from "./genderenum";
import { PhoneNumber } from "./phonenumber";
export declare enum EmployeeCompensationsFlsaStatusEnum {
    Exempt = "exempt",
    SalariedNonexempt = "salaried-nonexempt",
    Nonexempt = "nonexempt",
    Owner = "owner"
}
export declare class EmployeeCompensations extends SpeakeasyBase {
    currency?: CurrencyEnum;
    effectiveDate?: string;
    flsaStatus?: EmployeeCompensationsFlsaStatusEnum;
    id?: string;
    jobId?: string;
    paymentUnit?: PaymentUnitEnum;
    rate?: number;
}
export declare enum EmployeeEmploymentRoleSubTypeEnum {
    FullTime = "full_time",
    PartTime = "part_time",
    Hourly = "hourly"
}
export declare enum EmployeeEmploymentRoleTypeEnum {
    Contractor = "contractor",
    Employee = "employee",
    Freelance = "freelance",
    Temp = "temp",
    Intership = "intership",
    Other = "other"
}
export declare class EmployeeEmploymentRole extends SpeakeasyBase {
    subType?: EmployeeEmploymentRoleSubTypeEnum;
    type?: EmployeeEmploymentRoleTypeEnum;
}
export declare enum EmployeeEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}
export declare class EmployeeJobs extends SpeakeasyBase {
    compensationRate?: number;
    currency?: CurrencyEnum;
    employeeId?: string;
    endDate?: Date;
    hiredAt?: Date;
    id?: string;
    isPrimary?: boolean;
    location?: Address;
    paymentUnit?: PaymentUnitEnum;
    role?: string;
    startDate?: Date;
    title?: string;
}
export declare class EmployeeManager extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    name?: string;
}
export declare class EmployeePartner extends SpeakeasyBase {
    birthday?: Date;
    deceasedOn?: Date;
    firstName?: string;
    gender?: GenderEnum;
    id?: string;
    initials?: string;
    lastName?: string;
    middleName?: string;
}
export declare class EmployeeSocialLinks extends SpeakeasyBase {
    id?: string;
    type?: string;
    url: string;
}
/**
 * The team the user is currently in.
**/
export declare class EmployeeTeam extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class EmployeeCompensationsInput extends SpeakeasyBase {
    currency?: CurrencyEnum;
    effectiveDate?: string;
    flsaStatus?: EmployeeCompensationsFlsaStatusEnum;
    paymentUnit?: PaymentUnitEnum;
    rate?: number;
}
export declare class EmployeeJobsInput extends SpeakeasyBase {
    compensationRate?: number;
    currency?: CurrencyEnum;
    endDate?: Date;
    hiredAt?: Date;
    isPrimary?: boolean;
    location?: Address;
    paymentUnit?: PaymentUnitEnum;
    role?: string;
    startDate?: Date;
    title?: string;
}
export declare class EmployeeManagerInput extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
}
export declare class EmployeePartnerInput extends SpeakeasyBase {
    birthday?: Date;
    deceasedOn?: Date;
    firstName?: string;
    gender?: GenderEnum;
    initials?: string;
    lastName?: string;
    middleName?: string;
}
export declare class Employee extends SpeakeasyBase {
    addresses?: Address[];
    birthday?: Date;
    companyId?: string;
    companyName?: string;
    compensations?: EmployeeCompensations[];
    countryOfBirth?: string;
    createdAt?: Date;
    createdBy?: string;
    customFields?: CustomField[];
    deceasedOn?: Date;
    deleted?: boolean;
    department?: string;
    departmentId?: string;
    description?: string;
    dietaryPreference?: string;
    directReports?: string[];
    displayName?: string;
    division?: string;
    emails?: Email[];
    employeeNumber?: string;
    employmentEndDate?: string;
    employmentRole?: EmployeeEmploymentRole;
    employmentStartDate?: string;
    employmentStatus?: EmployeeEmploymentStatusEnum;
    firstName?: string;
    foodAllergies?: string[];
    gender?: GenderEnum;
    id: string;
    initials?: string;
    jobs?: EmployeeJobs[];
    languages?: string[];
    lastName?: string;
    manager?: EmployeeManager;
    maritalStatus?: string;
    middleName?: string;
    nationalities?: string[];
    partner?: EmployeePartner;
    phoneNumbers?: PhoneNumber[];
    photoUrl?: string;
    preferredLanguage?: string;
    preferredName?: string;
    pronouns?: string;
    recordUrl?: string;
    rowVersion?: string;
    salutation?: string;
    socialLinks?: EmployeeSocialLinks[];
    socialSecurityNumber?: string;
    source?: string;
    sourceId?: string;
    tags?: string[];
    taxCode?: string;
    taxId?: string;
    team?: EmployeeTeam;
    timezone?: string;
    title?: string;
    updatedAt?: Date;
    updatedBy?: string;
    worksRemote?: boolean;
}
export declare class EmployeeInput extends SpeakeasyBase {
    addresses?: Address[];
    birthday?: Date;
    companyId?: string;
    companyName?: string;
    compensations?: EmployeeCompensationsInput[];
    countryOfBirth?: string;
    customFields?: CustomField[];
    deceasedOn?: Date;
    deleted?: boolean;
    department?: string;
    departmentId?: string;
    description?: string;
    dietaryPreference?: string;
    directReports?: string[];
    displayName?: string;
    division?: string;
    emails?: Email[];
    employeeNumber?: string;
    employmentEndDate?: string;
    employmentRole?: EmployeeEmploymentRole;
    employmentStartDate?: string;
    employmentStatus?: EmployeeEmploymentStatusEnum;
    firstName?: string;
    foodAllergies?: string[];
    gender?: GenderEnum;
    initials?: string;
    jobs?: EmployeeJobsInput[];
    languages?: string[];
    lastName?: string;
    manager?: EmployeeManagerInput;
    maritalStatus?: string;
    middleName?: string;
    nationalities?: string[];
    partner?: EmployeePartnerInput;
    phoneNumbers?: PhoneNumber[];
    photoUrl?: string;
    preferredLanguage?: string;
    preferredName?: string;
    pronouns?: string;
    recordUrl?: string;
    rowVersion?: string;
    salutation?: string;
    socialLinks?: EmployeeSocialLinks[];
    socialSecurityNumber?: string;
    source?: string;
    sourceId?: string;
    tags?: string[];
    taxCode?: string;
    taxId?: string;
    team?: EmployeeTeam;
    timezone?: string;
    title?: string;
    worksRemote?: boolean;
}
