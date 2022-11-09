import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelLatencyModeEnum } from "./channellatencymodeenum";


// ChannelSummary
/** 
 * Summary information about a channel.
**/
export class ChannelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @Metadata({ data: "json, name=latencyMode" })
  latencyMode?: ChannelLatencyModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
