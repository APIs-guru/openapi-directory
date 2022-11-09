import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingCategoryEnum } from "./findingcategoryenum";
import { ClassificationDetails } from "./classificationdetails";
import { PolicyDetails } from "./policydetails";
import { ResourcesAffected } from "./resourcesaffected";
import { Severity } from "./severity";
import { FindingTypeEnum } from "./findingtypeenum";


// Finding
/** 
 * Provides the details of a finding.
**/
export class Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=category" })
  category?: FindingCategoryEnum;

  @Metadata({ data: "json, name=classificationDetails" })
  classificationDetails?: ClassificationDetails;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=partition" })
  partition?: string;

  @Metadata({ data: "json, name=policyDetails" })
  policyDetails?: PolicyDetails;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=resourcesAffected" })
  resourcesAffected?: ResourcesAffected;

  @Metadata({ data: "json, name=sample" })
  sample?: boolean;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: Severity;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: FindingTypeEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
