import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallRuleGroupAssociationStatusEnum } from "./firewallrulegroupassociationstatusenum";


export class ListFirewallRuleGroupAssociationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallRuleGroupId" })
  firewallRuleGroupId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=Status" })
  status?: FirewallRuleGroupAssociationStatusEnum;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
