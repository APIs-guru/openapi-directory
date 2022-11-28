import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoColorRangeEnum } from "./videocolorrangeenum";



// VideoMetadata
/** 
 * Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
**/
export class VideoMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorRange" })
  colorRange?: VideoColorRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=FrameHeight" })
  frameHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=FrameRate" })
  frameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=FrameWidth" })
  frameWidth?: number;
}
