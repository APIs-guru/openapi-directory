import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallConfig } from "./firewallconfig";



export class UpdateFirewallConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallConfig" })
  firewallConfig?: FirewallConfig;
}
