import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { Department } from "./department";
import { CurrencyEnum } from "./currencyenum";
import { JobStatusEnum } from "./jobstatusenum";


// JobBranch
/** 
 * Details of the branch for which the job is created.
**/
export class JobBranch extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum JobEmploymentTermsEnum {
    FullTime = "full-time"
,    PartTime = "part-time"
,    Intership = "intership"
,    Contractor = "contractor"
,    Employee = "employee"
,    Freelance = "freelance"
,    Temp = "temp"
,    Seasonal = "seasonal"
,    Volunteer = "volunteer"
,    Other = "other"
}


export class JobSalary extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}

export enum JobVisibilityEnum {
    Public = "public"
,    Internal = "internal"
}


export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=available_to_employees" })
  availableToEmployees?: boolean;

  @Metadata({ data: "json, name=blocks" })
  blocks?: any[];

  @Metadata({ data: "json, name=branch" })
  branch?: JobBranch;

  @Metadata({ data: "json, name=closing" })
  closing?: string;

  @Metadata({ data: "json, name=closing_date" })
  closingDate?: Date;

  @Metadata({ data: "json, name=closing_html" })
  closingHtml?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=confidential" })
  confidential?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=department" })
  department?: Department;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=description_html" })
  descriptionHtml?: string;

  @Metadata({ data: "json, name=employment_terms" })
  employmentTerms?: JobEmploymentTermsEnum;

  @Metadata({ data: "json, name=experience" })
  experience?: string;

  @Metadata({ data: "json, name=followers" })
  followers?: string[];

  @Metadata({ data: "json, name=hiring_managers" })
  hiringManagers?: any[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=job_portal_url" })
  jobPortalUrl?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=published_at" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @Metadata({ data: "json, name=recruiters" })
  recruiters?: string[];

  @Metadata({ data: "json, name=remote" })
  remote?: boolean;

  @Metadata({ data: "json, name=requisition_id" })
  requisitionId?: string;

  @Metadata({ data: "json, name=salary" })
  salary?: JobSalary;

  @Metadata({ data: "json, name=sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=status" })
  status?: JobStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: JobVisibilityEnum[];
}
