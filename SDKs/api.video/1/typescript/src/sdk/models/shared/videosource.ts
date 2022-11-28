import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoSourceLiveStream } from "./videosourcelivestream";



// VideoSource
/** 
 * Source information about the video.
**/
export class VideoSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=liveStream" })
  liveStream?: VideoSourceLiveStream;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
