import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateFirewallPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn?: string;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
