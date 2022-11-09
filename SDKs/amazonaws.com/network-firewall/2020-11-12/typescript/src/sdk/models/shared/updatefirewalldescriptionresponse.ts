import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateFirewallDescriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
