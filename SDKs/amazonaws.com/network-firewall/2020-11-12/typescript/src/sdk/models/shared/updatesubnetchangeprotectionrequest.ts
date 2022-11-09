import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSubnetChangeProtectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=SubnetChangeProtection" })
  subnetChangeProtection: boolean;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
