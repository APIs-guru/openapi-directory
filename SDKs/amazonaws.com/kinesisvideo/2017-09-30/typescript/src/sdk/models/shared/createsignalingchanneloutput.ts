import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateSignalingChannelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelARN" })
  channelArn?: string;
}
