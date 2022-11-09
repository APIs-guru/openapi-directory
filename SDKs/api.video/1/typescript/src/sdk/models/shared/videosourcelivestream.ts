import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoSourceLiveStreamLink } from "./videosourcelivestreamlink";


// VideoSourceLiveStream
/** 
 * This appears if the video is from a Live Record.
**/
export class VideoSourceLiveStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=links", elemType: shared.VideoSourceLiveStreamLink })
  links?: VideoSourceLiveStreamLink[];

  @Metadata({ data: "json, name=liveStreamId" })
  liveStreamId?: string;
}
