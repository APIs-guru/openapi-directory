import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";



// FirewallRule
/** 
 * A single firewall rule in a rule group.
**/
export class FirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=BlockOverrideDnsType" })
  blockOverrideDnsType?: BlockOverrideDnsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=BlockOverrideDomain" })
  blockOverrideDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=BlockOverrideTtl" })
  blockOverrideTtl?: number;

  @SpeakeasyMetadata({ data: "json, name=BlockResponse" })
  blockResponse?: BlockResponseEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=ModificationTime" })
  modificationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;
}
