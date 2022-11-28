import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelLatencyModeEnum } from "./channellatencymodeenum";



// ChannelSummary
/** 
 * Summary information about a channel.
**/
export class ChannelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latencyMode" })
  latencyMode?: ChannelLatencyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
