import { SpeakeasyBase } from "../../../internal/utils";
import { FindingCategoryEnum } from "./findingcategoryenum";
import { ClassificationDetails } from "./classificationdetails";
import { PolicyDetails } from "./policydetails";
import { ResourcesAffected } from "./resourcesaffected";
import { Severity } from "./severity";
import { FindingTypeEnum } from "./findingtypeenum";
/**
 * Provides the details of a finding.
**/
export declare class Finding extends SpeakeasyBase {
    accountId?: string;
    archived?: boolean;
    category?: FindingCategoryEnum;
    classificationDetails?: ClassificationDetails;
    count?: number;
    createdAt?: Date;
    description?: string;
    id?: string;
    partition?: string;
    policyDetails?: PolicyDetails;
    region?: string;
    resourcesAffected?: ResourcesAffected;
    sample?: boolean;
    schemaVersion?: string;
    severity?: Severity;
    title?: string;
    type?: FindingTypeEnum;
    updatedAt?: Date;
}
