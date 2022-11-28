import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;
}
