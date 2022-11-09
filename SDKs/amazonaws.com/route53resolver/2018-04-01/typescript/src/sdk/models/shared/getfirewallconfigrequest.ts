import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
