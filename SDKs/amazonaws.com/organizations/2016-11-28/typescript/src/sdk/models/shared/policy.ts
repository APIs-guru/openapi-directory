import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicySummary } from "./policysummary";


// Policy
/** 
 * Contains rules to be applied to the affected accounts. Policies can be attached directly to accounts, or to roots and OUs to affect all accounts in those hierarchies.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=PolicySummary" })
  policySummary?: PolicySummary;
}
