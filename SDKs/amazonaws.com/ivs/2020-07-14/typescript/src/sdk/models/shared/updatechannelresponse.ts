import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Channel } from "./channel";


export class UpdateChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: Channel;
}
