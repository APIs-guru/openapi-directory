import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleGroupAssociationStatusEnum } from "./firewallrulegroupassociationstatusenum";



export class ListFirewallRuleGroupAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: FirewallRuleGroupAssociationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
