import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallMetadata } from "./firewallmetadata";



export class ListFirewallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Firewalls", elemType: FirewallMetadata })
  firewalls?: FirewallMetadata[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
