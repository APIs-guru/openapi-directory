import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { PaymentUnitEnum } from "./paymentunitenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { GenderEnum } from "./genderenum";
import { PhoneNumber } from "./phonenumber";


export enum EmployeeCompensationsFlsaStatusEnum {
    Exempt = "exempt",
    SalariedNonexempt = "salaried-nonexempt",
    Nonexempt = "nonexempt",
    Owner = "owner"
}


export class EmployeeCompensations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=effective_date" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=flsa_status" })
  flsaStatus?: EmployeeCompensationsFlsaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=job_id" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_unit" })
  paymentUnit?: PaymentUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;
}

export enum EmployeeEmploymentRoleSubTypeEnum {
    FullTime = "full_time",
    PartTime = "part_time",
    Hourly = "hourly"
}

export enum EmployeeEmploymentRoleTypeEnum {
    Contractor = "contractor",
    Employee = "employee",
    Freelance = "freelance",
    Temp = "temp",
    Intership = "intership",
    Other = "other"
}


export class EmployeeEmploymentRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sub_type" })
  subType?: EmployeeEmploymentRoleSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EmployeeEmploymentRoleTypeEnum;
}

export enum EmployeeEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}


export class EmployeeJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compensation_rate" })
  compensationRate?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=hired_at" })
  hiredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_primary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Address;

  @SpeakeasyMetadata({ data: "json, name=payment_unit" })
  paymentUnit?: PaymentUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class EmployeeManager extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class EmployeePartner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=deceased_on" })
  deceasedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: GenderEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;
}


export class EmployeeSocialLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// EmployeeTeam
/** 
 * The team the user is currently in.
**/
export class EmployeeTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class EmployeeCompensationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=effective_date" })
  effectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=flsa_status" })
  flsaStatus?: EmployeeCompensationsFlsaStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=payment_unit" })
  paymentUnit?: PaymentUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;
}


export class EmployeeJobsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compensation_rate" })
  compensationRate?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=hired_at" })
  hiredAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=is_primary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Address;

  @SpeakeasyMetadata({ data: "json, name=payment_unit" })
  paymentUnit?: PaymentUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class EmployeeManagerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class EmployeePartnerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=deceased_on" })
  deceasedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: GenderEnum;

  @SpeakeasyMetadata({ data: "json, name=initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;
}


export class Employee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=compensations", elemType: EmployeeCompensations })
  compensations?: EmployeeCompensations[];

  @SpeakeasyMetadata({ data: "json, name=country_of_birth" })
  countryOfBirth?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=deceased_on" })
  deceasedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=department_id" })
  departmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dietary_preference" })
  dietaryPreference?: string;

  @SpeakeasyMetadata({ data: "json, name=direct_reports" })
  directReports?: string[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=employee_number" })
  employeeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_end_date" })
  employmentEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_role" })
  employmentRole?: EmployeeEmploymentRole;

  @SpeakeasyMetadata({ data: "json, name=employment_start_date" })
  employmentStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_status" })
  employmentStatus?: EmployeeEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=food_allergies" })
  foodAllergies?: string[];

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: GenderEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: EmployeeJobs })
  jobs?: EmployeeJobs[];

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=manager" })
  manager?: EmployeeManager;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=nationalities" })
  nationalities?: string[];

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: EmployeePartner;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_name" })
  preferredName?: string;

  @SpeakeasyMetadata({ data: "json, name=pronouns" })
  pronouns?: string;

  @SpeakeasyMetadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: EmployeeSocialLinks })
  socialLinks?: EmployeeSocialLinks[];

  @SpeakeasyMetadata({ data: "json, name=social_security_number" })
  socialSecurityNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: EmployeeTeam;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=works_remote" })
  worksRemote?: boolean;
}


export class EmployeeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=compensations", elemType: EmployeeCompensationsInput })
  compensations?: EmployeeCompensationsInput[];

  @SpeakeasyMetadata({ data: "json, name=country_of_birth" })
  countryOfBirth?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=deceased_on" })
  deceasedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=department_id" })
  departmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dietary_preference" })
  dietaryPreference?: string;

  @SpeakeasyMetadata({ data: "json, name=direct_reports" })
  directReports?: string[];

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=employee_number" })
  employeeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_end_date" })
  employmentEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_role" })
  employmentRole?: EmployeeEmploymentRole;

  @SpeakeasyMetadata({ data: "json, name=employment_start_date" })
  employmentStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_status" })
  employmentStatus?: EmployeeEmploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=food_allergies" })
  foodAllergies?: string[];

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: GenderEnum;

  @SpeakeasyMetadata({ data: "json, name=initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: EmployeeJobsInput })
  jobs?: EmployeeJobsInput[];

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=manager" })
  manager?: EmployeeManagerInput;

  @SpeakeasyMetadata({ data: "json, name=marital_status" })
  maritalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=nationalities" })
  nationalities?: string[];

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: EmployeePartnerInput;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_name" })
  preferredName?: string;

  @SpeakeasyMetadata({ data: "json, name=pronouns" })
  pronouns?: string;

  @SpeakeasyMetadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: EmployeeSocialLinks })
  socialLinks?: EmployeeSocialLinks[];

  @SpeakeasyMetadata({ data: "json, name=social_security_number" })
  socialSecurityNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: EmployeeTeam;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=works_remote" })
  worksRemote?: boolean;
}
