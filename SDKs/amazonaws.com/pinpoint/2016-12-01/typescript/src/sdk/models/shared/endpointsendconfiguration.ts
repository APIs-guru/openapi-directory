import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointSendConfiguration
/** 
 * Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
**/
export class EndpointSendConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BodyOverride" })
  bodyOverride?: string;

  @Metadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=TitleOverride" })
  titleOverride?: string;
}
