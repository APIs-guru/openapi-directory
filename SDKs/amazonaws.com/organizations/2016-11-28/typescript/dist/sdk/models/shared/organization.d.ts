import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeSummary } from "./policytypesummary";
import { OrganizationFeatureSetEnum } from "./organizationfeaturesetenum";
/**
 * Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
**/
export declare class Organization extends SpeakeasyBase {
    arn?: string;
    availablePolicyTypes?: PolicyTypeSummary[];
    featureSet?: OrganizationFeatureSetEnum;
    id?: string;
    masterAccountArn?: string;
    masterAccountEmail?: string;
    masterAccountId?: string;
}
