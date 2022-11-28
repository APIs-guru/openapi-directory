import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoSourceLiveStreamLink } from "./videosourcelivestreamlink";



// VideoSourceLiveStream
/** 
 * This appears if the video is from a Live Record.
**/
export class VideoSourceLiveStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: VideoSourceLiveStreamLink })
  links?: VideoSourceLiveStreamLink[];

  @SpeakeasyMetadata({ data: "json, name=liveStreamId" })
  liveStreamId?: string;
}
