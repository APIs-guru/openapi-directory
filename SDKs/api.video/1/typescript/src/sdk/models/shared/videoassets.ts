import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoAssets
/** 
 * Collection of details about the video object that you can use to work with the video object.
**/
export class VideoAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hls" })
  hls?: string;

  @SpeakeasyMetadata({ data: "json, name=iframe" })
  iframe?: string;

  @SpeakeasyMetadata({ data: "json, name=mp4" })
  mp4?: string;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}
