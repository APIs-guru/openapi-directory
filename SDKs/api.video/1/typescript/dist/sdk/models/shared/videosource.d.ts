import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSourceLiveStream } from "./videosourcelivestream";
/**
 * Source information about the video.
**/
export declare class VideoSource extends SpeakeasyBase {
    liveStream?: VideoSourceLiveStream;
    type?: string;
    uri?: string;
}
