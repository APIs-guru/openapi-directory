import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Firewall } from "./firewall";
import { FirewallStatus } from "./firewallstatus";


export class DescribeFirewallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Firewall" })
  firewall?: Firewall;

  @Metadata({ data: "json, name=FirewallStatus" })
  firewallStatus?: FirewallStatus;

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
