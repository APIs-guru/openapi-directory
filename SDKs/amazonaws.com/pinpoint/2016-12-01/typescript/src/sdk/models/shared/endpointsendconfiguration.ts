import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointSendConfiguration
/** 
 * Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
**/
export class EndpointSendConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BodyOverride" })
  bodyOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TitleOverride" })
  titleOverride?: string;
}
