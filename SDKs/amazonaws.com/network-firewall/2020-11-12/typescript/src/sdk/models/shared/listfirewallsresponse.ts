import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallMetadata } from "./firewallmetadata";


export class ListFirewallsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Firewalls", elemType: shared.FirewallMetadata })
  firewalls?: FirewallMetadata[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
