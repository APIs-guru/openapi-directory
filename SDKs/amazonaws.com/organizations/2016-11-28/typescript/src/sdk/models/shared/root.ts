import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeSummary } from "./policytypesummary";



// Root
/** 
 * Contains details about a root. A root is a top-level parent node in the hierarchy of an organization that can contain organizational units (OUs) and accounts. The root contains every AWS account in the organization.
**/
export class Root extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyTypes", elemType: PolicyTypeSummary })
  policyTypes?: PolicyTypeSummary[];
}
