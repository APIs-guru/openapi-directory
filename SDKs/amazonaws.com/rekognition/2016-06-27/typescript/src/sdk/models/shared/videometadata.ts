import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoColorRangeEnum } from "./videocolorrangeenum";


// VideoMetadata
/** 
 * Information about a video that Amazon Rekognition analyzed. <code>Videometadata</code> is returned in every page of paginated responses from a Amazon Rekognition video operation.
**/
export class VideoMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=ColorRange" })
  colorRange?: VideoColorRangeEnum;

  @Metadata({ data: "json, name=DurationMillis" })
  durationMillis?: number;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=FrameHeight" })
  frameHeight?: number;

  @Metadata({ data: "json, name=FrameRate" })
  frameRate?: number;

  @Metadata({ data: "json, name=FrameWidth" })
  frameWidth?: number;
}
