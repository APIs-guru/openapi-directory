import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelLatencyModeEnum } from "./channellatencymodeenum";
import { ChannelTypeEnum } from "./channeltypeenum";
/**
 * Object specifying a channel.
**/
export declare class Channel extends SpeakeasyBase {
    arn?: string;
    authorized?: boolean;
    ingestEndpoint?: string;
    latencyMode?: ChannelLatencyModeEnum;
    name?: string;
    playbackUrl?: string;
    recordingConfigurationArn?: string;
    tags?: Map<string, string>;
    type?: ChannelTypeEnum;
}
