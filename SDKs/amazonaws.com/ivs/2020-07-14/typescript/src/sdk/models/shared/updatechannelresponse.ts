import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";



export class UpdateChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: Channel;
}
