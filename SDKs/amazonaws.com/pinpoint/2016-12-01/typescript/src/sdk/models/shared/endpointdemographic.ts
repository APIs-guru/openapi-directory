import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointDemographic
/** 
 * Specifies demographic information about an endpoint, such as the applicable time zone and platform.
**/
export class EndpointDemographic extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppVersion" })
  appVersion?: string;

  @Metadata({ data: "json, name=Locale" })
  locale?: string;

  @Metadata({ data: "json, name=Make" })
  make?: string;

  @Metadata({ data: "json, name=Model" })
  model?: string;

  @Metadata({ data: "json, name=ModelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=Platform" })
  platform?: string;

  @Metadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
