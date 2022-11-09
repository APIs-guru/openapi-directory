import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChangeDiscoverabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=enable_discovery" })
  enableDiscovery: boolean;
}
