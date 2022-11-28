import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelLatencyModeEnum } from "./channellatencymodeenum";
import { ChannelTypeEnum } from "./channeltypeenum";



// Channel
/** 
 * Object specifying a channel.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ingestEndpoint" })
  ingestEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=latencyMode" })
  latencyMode?: ChannelLatencyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=playbackUrl" })
  playbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChannelTypeEnum;
}
