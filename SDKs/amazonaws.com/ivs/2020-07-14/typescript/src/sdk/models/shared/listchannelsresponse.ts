import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelSummary } from "./channelsummary";



export class ListChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: ChannelSummary })
  channels: ChannelSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
