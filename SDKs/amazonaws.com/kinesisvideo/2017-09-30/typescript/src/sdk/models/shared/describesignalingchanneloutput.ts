import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelInfo } from "./channelinfo";


export class DescribeSignalingChannelOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelInfo" })
  channelInfo?: ChannelInfo;
}
