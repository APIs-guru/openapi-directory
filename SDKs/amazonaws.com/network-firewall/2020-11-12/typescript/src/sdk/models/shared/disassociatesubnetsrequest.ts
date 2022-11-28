import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateSubnetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
