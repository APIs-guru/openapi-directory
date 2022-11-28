import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelInfo } from "./channelinfo";



export class DescribeSignalingChannelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelInfo" })
  channelInfo?: ChannelInfo;
}
