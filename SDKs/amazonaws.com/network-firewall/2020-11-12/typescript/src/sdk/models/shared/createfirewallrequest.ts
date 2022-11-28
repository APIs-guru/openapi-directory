import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";



export class CreateFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteProtection" })
  deleteProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallName" })
  firewallName: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyChangeProtection" })
  firewallPolicyChangeProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubnetChangeProtection" })
  subnetChangeProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SubnetMappings", elemType: SubnetMapping })
  subnetMappings: SubnetMapping[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: string;
}
