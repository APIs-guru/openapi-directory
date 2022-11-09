import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyTypeSummary } from "./policytypesummary";
import { OrganizationFeatureSetEnum } from "./organizationfeaturesetenum";


// Organization
/** 
 * Contains details about an organization. An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies .
**/
export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AvailablePolicyTypes", elemType: shared.PolicyTypeSummary })
  availablePolicyTypes?: PolicyTypeSummary[];

  @Metadata({ data: "json, name=FeatureSet" })
  featureSet?: OrganizationFeatureSetEnum;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=MasterAccountArn" })
  masterAccountArn?: string;

  @Metadata({ data: "json, name=MasterAccountEmail" })
  masterAccountEmail?: string;

  @Metadata({ data: "json, name=MasterAccountId" })
  masterAccountId?: string;
}
