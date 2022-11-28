import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSourceLiveStreamLink } from "./videosourcelivestreamlink";
/**
 * This appears if the video is from a Live Record.
**/
export declare class VideoSourceLiveStream extends SpeakeasyBase {
    links?: VideoSourceLiveStreamLink[];
    liveStreamId?: string;
}
