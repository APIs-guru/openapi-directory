import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamAssets } from "./livestreamassets";
export declare class LiveStream extends SpeakeasyBase {
    assets?: LiveStreamAssets;
    broadcasting?: boolean;
    liveStreamId?: string;
    name?: string;
    playerId?: string;
    public?: boolean;
    record?: boolean;
    streamKey?: string;
}
