import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";



export class UpdateFirewallRuleRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" })
  firewallDomainListId: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;
}
