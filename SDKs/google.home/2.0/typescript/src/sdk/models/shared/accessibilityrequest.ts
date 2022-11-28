import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessibilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint_enabled" })
  endpointEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=hotword_enabled" })
  hotwordEnabled: boolean;
}
