import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallConfig } from "./firewallconfig";



export class ListFirewallConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallConfigs", elemType: FirewallConfig })
  firewallConfigs?: FirewallConfig[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
