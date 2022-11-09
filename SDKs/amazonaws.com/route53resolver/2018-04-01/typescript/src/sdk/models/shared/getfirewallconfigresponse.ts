import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallConfig } from "./firewallconfig";


export class GetFirewallConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallConfig" })
  firewallConfig?: FirewallConfig;
}
