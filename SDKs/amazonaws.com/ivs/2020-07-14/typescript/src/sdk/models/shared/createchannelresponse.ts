import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { StreamKey } from "./streamkey";



export class CreateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: Channel;

  @SpeakeasyMetadata({ data: "json, name=streamKey" })
  streamKey?: StreamKey;
}
