import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateSignalingChannelOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelARN" })
  channelArn?: string;
}
