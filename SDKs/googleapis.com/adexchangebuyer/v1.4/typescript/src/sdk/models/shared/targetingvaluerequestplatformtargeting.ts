import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TargetingValueRequestPlatformTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestPlatforms" })
  requestPlatforms?: string[];
}
