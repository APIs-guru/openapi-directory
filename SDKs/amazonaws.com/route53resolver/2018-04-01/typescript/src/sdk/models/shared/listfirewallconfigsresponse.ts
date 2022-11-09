import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallConfig } from "./firewallconfig";


export class ListFirewallConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallConfigs", elemType: shared.FirewallConfig })
  firewallConfigs?: FirewallConfig[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
