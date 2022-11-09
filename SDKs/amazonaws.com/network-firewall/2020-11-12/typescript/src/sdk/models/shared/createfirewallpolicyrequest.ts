import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallPolicy } from "./firewallpolicy";
import { Tag } from "./tag";


export class CreateFirewallPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=FirewallPolicy" })
  firewallPolicy: FirewallPolicy;

  @Metadata({ data: "json, name=FirewallPolicyName" })
  firewallPolicyName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
