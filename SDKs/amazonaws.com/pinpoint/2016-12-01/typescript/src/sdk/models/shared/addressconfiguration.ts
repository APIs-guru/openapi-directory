import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelTypeEnum } from "./channeltypeenum";


// AddressConfiguration
/** 
 * Specifies address-based configuration settings for a message that's sent directly to an endpoint.
**/
export class AddressConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=BodyOverride" })
  bodyOverride?: string;

  @Metadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @Metadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @Metadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @Metadata({ data: "json, name=TitleOverride" })
  titleOverride?: string;
}
