import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetMapping } from "./subnetmapping";



export class AssociateSubnetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetMappings", elemType: SubnetMapping })
  subnetMappings?: SubnetMapping[];

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
