import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Firewall } from "./firewall";
import { FirewallStatus } from "./firewallstatus";


export class DeleteFirewallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Firewall" })
  firewall?: Firewall;

  @Metadata({ data: "json, name=FirewallStatus" })
  firewallStatus?: FirewallStatus;
}
