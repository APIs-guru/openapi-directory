import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallFailOpenStatusEnum } from "./firewallfailopenstatusenum";



export class UpdateFirewallConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallFailOpen" })
  firewallFailOpen: FirewallFailOpenStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
