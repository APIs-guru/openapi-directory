import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelInfo } from "./channelinfo";



export class ListSignalingChannelsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelInfoList", elemType: ChannelInfo })
  channelInfoList?: ChannelInfo[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
