import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelLatencyModeEnum } from "./channellatencymodeenum";
import { ChannelTypeEnum } from "./channeltypeenum";


// Channel
/** 
 * Object specifying a channel.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @Metadata({ data: "json, name=ingestEndpoint" })
  ingestEndpoint?: string;

  @Metadata({ data: "json, name=latencyMode" })
  latencyMode?: ChannelLatencyModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=playbackUrl" })
  playbackUrl?: string;

  @Metadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: ChannelTypeEnum;
}
