import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointDemographic
/** 
 * Specifies demographic information about an endpoint, such as the applicable time zone and platform.
**/
export class EndpointDemographic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppVersion" })
  appVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=Make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=Model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
