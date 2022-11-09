import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoAssets
/** 
 * Collection of details about the video object that you can use to work with the video object.
**/
export class VideoAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=hls" })
  hls?: string;

  @Metadata({ data: "json, name=iframe" })
  iframe?: string;

  @Metadata({ data: "json, name=mp4" })
  mp4?: string;

  @Metadata({ data: "json, name=player" })
  player?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}
