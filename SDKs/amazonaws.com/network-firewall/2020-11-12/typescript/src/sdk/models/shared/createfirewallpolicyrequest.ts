import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicy } from "./firewallpolicy";
import { Tag } from "./tag";



export class CreateFirewallPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicy" })
  firewallPolicy: FirewallPolicy;

  @SpeakeasyMetadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
