import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelLatencyModeEnum } from "./channellatencymodeenum";
/**
 * Summary information about a channel.
**/
export declare class ChannelSummary extends SpeakeasyBase {
    arn?: string;
    authorized?: boolean;
    latencyMode?: ChannelLatencyModeEnum;
    name?: string;
    recordingConfigurationArn?: string;
    tags?: Map<string, string>;
}
