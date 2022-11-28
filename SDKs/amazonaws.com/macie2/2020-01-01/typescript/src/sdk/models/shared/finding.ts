import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: FindingCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=classificationDetails" })
  classificationDetails?: ClassificationDetails;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=partition" })
  partition?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDetails" })
  policyDetails?: PolicyDetails;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcesAffected" })
  resourcesAffected?: ResourcesAffected;

  @SpeakeasyMetadata({ data: "json, name=sample" })
  sample?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: Severity;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FindingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
