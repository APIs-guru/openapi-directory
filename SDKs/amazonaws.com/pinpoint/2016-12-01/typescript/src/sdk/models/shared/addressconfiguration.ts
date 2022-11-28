import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";



// AddressConfiguration
/** 
 * Specifies address-based configuration settings for a message that's sent directly to an endpoint.
**/
export class AddressConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BodyOverride" })
  bodyOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=ChannelType" })
  channelType?: ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RawContent" })
  rawContent?: string;

  @SpeakeasyMetadata({ data: "json, name=Substitutions" })
  substitutions?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TitleOverride" })
  titleOverride?: string;
}
