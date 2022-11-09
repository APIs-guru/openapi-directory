import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoThumbnailPickPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=timecode" })
  timecode: string;
}
