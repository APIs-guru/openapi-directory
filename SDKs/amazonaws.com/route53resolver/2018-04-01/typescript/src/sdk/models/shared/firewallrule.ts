import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";


// FirewallRule
/** 
 * A single firewall rule in a rule group.
**/
export class FirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @Metadata({ data: "json, name=BlockOverrideDnsType" })
  blockOverrideDnsType?: BlockOverrideDnsTypeEnum;

  @Metadata({ data: "json, name=BlockOverrideDomain" })
  blockOverrideDomain?: string;

  @Metadata({ data: "json, name=BlockOverrideTtl" })
  blockOverrideTtl?: number;

  @Metadata({ data: "json, name=BlockResponse" })
  blockResponse?: BlockResponseEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId?: string;

  @Metadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId?: string;

  @Metadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;
}
