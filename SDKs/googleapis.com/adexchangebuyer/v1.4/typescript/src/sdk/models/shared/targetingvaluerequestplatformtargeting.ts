import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TargetingValueRequestPlatformTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestPlatforms" })
  requestPlatforms?: string[];
}
