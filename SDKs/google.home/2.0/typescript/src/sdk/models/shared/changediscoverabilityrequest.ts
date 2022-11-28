import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeDiscoverabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enable_discovery" })
  enableDiscovery: boolean;
}
