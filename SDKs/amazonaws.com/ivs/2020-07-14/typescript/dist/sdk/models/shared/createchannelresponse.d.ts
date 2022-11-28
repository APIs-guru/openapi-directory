import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { StreamKey } from "./streamkey";
export declare class CreateChannelResponse extends SpeakeasyBase {
    channel?: Channel;
    streamKey?: StreamKey;
}
