import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Firewall } from "./firewall";
import { FirewallStatus } from "./firewallstatus";



export class CreateFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Firewall" })
  firewall?: Firewall;

  @SpeakeasyMetadata({ data: "json, name=FirewallStatus" })
  firewallStatus?: FirewallStatus;
}
