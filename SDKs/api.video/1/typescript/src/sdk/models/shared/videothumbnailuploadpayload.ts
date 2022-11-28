import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoThumbnailUploadPayloadFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class VideoThumbnailUploadPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: VideoThumbnailUploadPayloadFile;
}
