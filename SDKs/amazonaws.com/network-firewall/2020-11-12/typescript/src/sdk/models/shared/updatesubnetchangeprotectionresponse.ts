import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSubnetChangeProtectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetChangeProtection" })
  subnetChangeProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
