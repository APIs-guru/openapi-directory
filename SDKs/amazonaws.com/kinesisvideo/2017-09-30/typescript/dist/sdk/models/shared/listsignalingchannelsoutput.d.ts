import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelInfo } from "./channelinfo";
export declare class ListSignalingChannelsOutput extends SpeakeasyBase {
    channelInfoList?: ChannelInfo[];
    nextToken?: string;
}
