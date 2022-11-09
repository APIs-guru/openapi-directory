import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { PaymentUnitEnum } from "./paymentunitenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { GenderEnum } from "./genderenum";
import { CurrencyEnum } from "./currencyenum";
import { Address } from "./address";
import { PaymentUnitEnum } from "./paymentunitenum";
import { GenderEnum } from "./genderenum";
import { PhoneNumber } from "./phonenumber";

export enum EmployeeCompensationsFlsaStatusEnum {
    Exempt = "exempt"
,    SalariedNonexempt = "salaried-nonexempt"
,    Nonexempt = "nonexempt"
,    Owner = "owner"
}


export class EmployeeCompensations extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=effective_date" })
  effectiveDate?: string;

  @Metadata({ data: "json, name=flsa_status" })
  flsaStatus?: EmployeeCompensationsFlsaStatusEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=job_id" })
  jobId?: string;

  @Metadata({ data: "json, name=payment_unit" })
  paymentUnit?: PaymentUnitEnum;

  @Metadata({ data: "json, name=rate" })
  rate?: number;
}

export enum EmployeeEmploymentRoleSubTypeEnum {
    FullTime = "full_time"
,    PartTime = "part_time"
,    Hourly = "hourly"
}

export enum EmployeeEmploymentRoleTypeEnum {
    Contractor = "contractor"
,    Employee = "employee"
,    Freelance = "freelance"
,    Temp = "temp"
,    Intership = "intership"
,    Other = "other"
}


export class EmployeeEmploymentRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=sub_type" })
  subType?: EmployeeEmploymentRoleSubTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: EmployeeEmploymentRoleTypeEnum;
}

export enum EmployeeEmploymentStatusEnum {
    Active = "active"
,    Inactive = "inactive"
,    Terminated = "terminated"
,    Other = "other"
}


export class EmployeeJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=compensation_rate" })
  compensationRate?: number;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=hired_at" })
  hiredAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_primary" })
  isPrimary?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: Address;

  @Metadata({ data: "json, name=payment_unit" })
  paymentUnit?: PaymentUnitEnum;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class EmployeeManager extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class EmployeePartner extends SpeakeasyBase {
  @Metadata({ data: "json, name=birthday" })
  birthday?: Date;

  @Metadata({ data: "json, name=deceased_on" })
  deceasedOn?: Date;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: GenderEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initials" })
  initials?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;
}


export class EmployeeSocialLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// EmployeeTeam
/** 
 * The team the user is currently in.
**/
export class EmployeeTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class Employee extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=birthday" })
  birthday?: Date;

  @Metadata({ data: "json, name=company_id" })
  companyId?: string;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=compensations", elemType: shared.EmployeeCompensations })
  compensations?: EmployeeCompensations[];

  @Metadata({ data: "json, name=country_of_birth" })
  countryOfBirth?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField })
  customFields?: CustomField[];

  @Metadata({ data: "json, name=deceased_on" })
  deceasedOn?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=department" })
  department?: string;

  @Metadata({ data: "json, name=department_id" })
  departmentId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dietary_preference" })
  dietaryPreference?: string;

  @Metadata({ data: "json, name=direct_reports" })
  directReports?: string[];

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=division" })
  division?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=employee_number" })
  employeeNumber?: string;

  @Metadata({ data: "json, name=employment_end_date" })
  employmentEndDate?: string;

  @Metadata({ data: "json, name=employment_role" })
  employmentRole?: EmployeeEmploymentRole;

  @Metadata({ data: "json, name=employment_start_date" })
  employmentStartDate?: string;

  @Metadata({ data: "json, name=employment_status" })
  employmentStatus?: EmployeeEmploymentStatusEnum;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=food_allergies" })
  foodAllergies?: string[];

  @Metadata({ data: "json, name=gender" })
  gender?: GenderEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=initials" })
  initials?: string;

  @Metadata({ data: "json, name=jobs", elemType: shared.EmployeeJobs })
  jobs?: EmployeeJobs[];

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=manager" })
  manager?: EmployeeManager;

  @Metadata({ data: "json, name=marital_status" })
  maritalStatus?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=nationalities" })
  nationalities?: string[];

  @Metadata({ data: "json, name=partner" })
  partner?: EmployeePartner;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @Metadata({ data: "json, name=preferred_language" })
  preferredLanguage?: string;

  @Metadata({ data: "json, name=preferred_name" })
  preferredName?: string;

  @Metadata({ data: "json, name=pronouns" })
  pronouns?: string;

  @Metadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=salutation" })
  salutation?: string;

  @Metadata({ data: "json, name=social_links", elemType: shared.EmployeeSocialLinks })
  socialLinks?: EmployeeSocialLinks[];

  @Metadata({ data: "json, name=social_security_number" })
  socialSecurityNumber?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tax_code" })
  taxCode?: string;

  @Metadata({ data: "json, name=tax_id" })
  taxId?: string;

  @Metadata({ data: "json, name=team" })
  team?: EmployeeTeam;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=works_remote" })
  worksRemote?: boolean;
}
