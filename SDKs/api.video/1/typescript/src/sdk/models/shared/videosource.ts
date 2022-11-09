import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoSourceLiveStream } from "./videosourcelivestream";


// VideoSource
/** 
 * Source information about the video.
**/
export class VideoSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=liveStream" })
  liveStream?: VideoSourceLiveStream;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
