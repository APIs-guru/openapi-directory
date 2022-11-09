import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallFailOpenStatusEnum } from "./firewallfailopenstatusenum";


export class UpdateFirewallConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallFailOpen" })
  firewallFailOpen: FirewallFailOpenStatusEnum;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
