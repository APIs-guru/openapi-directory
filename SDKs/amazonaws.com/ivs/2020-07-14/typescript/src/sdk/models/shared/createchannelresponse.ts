import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Channel } from "./channel";
import { StreamKey } from "./streamkey";


export class CreateChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: Channel;

  @Metadata({ data: "json, name=streamKey" })
  streamKey?: StreamKey;
}
