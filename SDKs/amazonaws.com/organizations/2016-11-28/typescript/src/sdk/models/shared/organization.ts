import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeSummary } from "./policytypesummary";
import { OrganizationFeatureSetEnum } from "./organizationfeaturesetenum";



// Organization
/** 
 * Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
**/
export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailablePolicyTypes", elemType: PolicyTypeSummary })
  availablePolicyTypes?: PolicyTypeSummary[];

  @SpeakeasyMetadata({ data: "json, name=FeatureSet" })
  featureSet?: OrganizationFeatureSetEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterAccountArn" })
  masterAccountArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterAccountEmail" })
  masterAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterAccountId" })
  masterAccountId?: string;
}
