import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VideoThumbnailUploadPayloadFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class VideoThumbnailUploadPayload extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: VideoThumbnailUploadPayloadFile;
}
