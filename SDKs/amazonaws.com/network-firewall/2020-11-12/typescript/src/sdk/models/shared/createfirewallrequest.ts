import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";


export class CreateFirewallRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteProtection" })
  deleteProtection?: boolean;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName: string;

  @Metadata({ data: "json, name=FirewallPolicyArn" })
  firewallPolicyArn: string;

  @Metadata({ data: "json, name=FirewallPolicyChangeProtection" })
  firewallPolicyChangeProtection?: boolean;

  @Metadata({ data: "json, name=SubnetChangeProtection" })
  subnetChangeProtection?: boolean;

  @Metadata({ data: "json, name=SubnetMappings", elemType: shared.SubnetMapping })
  subnetMappings: SubnetMapping[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}
