import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoThumbnailPickPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timecode" })
  timecode: string;
}
