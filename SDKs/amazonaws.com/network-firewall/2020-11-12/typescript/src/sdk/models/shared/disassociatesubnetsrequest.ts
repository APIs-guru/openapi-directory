import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateSubnetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
