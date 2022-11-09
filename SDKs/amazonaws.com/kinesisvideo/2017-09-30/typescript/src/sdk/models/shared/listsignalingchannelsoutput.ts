import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelInfo } from "./channelinfo";


export class ListSignalingChannelsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelInfoList", elemType: shared.ChannelInfo })
  channelInfoList?: ChannelInfo[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
