import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelSummary } from "./channelsummary";


export class ListChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.ChannelSummary })
  channels: ChannelSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
