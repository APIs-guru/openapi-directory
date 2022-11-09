import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubnetMapping } from "./subnetmapping";


export class AssociateSubnetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallArn" })
  firewallArn?: string;

  @Metadata({ data: "json, name=FirewallName" })
  firewallName?: string;

  @Metadata({ data: "json, name=SubnetMappings", elemType: shared.SubnetMapping })
  subnetMappings?: SubnetMapping[];

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken?: string;
}
