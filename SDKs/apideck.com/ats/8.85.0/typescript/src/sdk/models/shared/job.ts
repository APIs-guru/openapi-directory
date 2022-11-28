import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Department } from "./department";
import { CurrencyEnum } from "./currencyenum";
import { JobStatusEnum } from "./jobstatusenum";



// JobBranch
/** 
 * Details of the branch for which the job is created.
**/
export class JobBranch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum JobEmploymentTermsEnum {
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


export class JobSalary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}

export enum JobVisibilityEnum {
    Public = "public",
    Internal = "internal"
}


export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=available_to_employees" })
  availableToEmployees?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blocks" })
  blocks?: any[];

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: JobBranch;

  @SpeakeasyMetadata({ data: "json, name=closing" })
  closing?: string;

  @SpeakeasyMetadata({ data: "json, name=closing_date" })
  closingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=closing_html" })
  closingHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=confidential" })
  confidential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: Department;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=description_html" })
  descriptionHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=employment_terms" })
  employmentTerms?: JobEmploymentTermsEnum;

  @SpeakeasyMetadata({ data: "json, name=experience" })
  experience?: string;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: string[];

  @SpeakeasyMetadata({ data: "json, name=hiring_managers" })
  hiringManagers?: any[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=job_portal_url" })
  jobPortalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=published_at" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recruiters" })
  recruiters?: string[];

  @SpeakeasyMetadata({ data: "json, name=remote" })
  remote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requisition_id" })
  requisitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=salary" })
  salary?: JobSalary;

  @SpeakeasyMetadata({ data: "json, name=sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: JobVisibilityEnum;
}
