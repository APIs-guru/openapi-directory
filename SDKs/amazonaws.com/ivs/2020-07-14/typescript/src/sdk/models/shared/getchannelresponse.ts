import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Channel } from "./channel";


export class GetChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: Channel;
}
