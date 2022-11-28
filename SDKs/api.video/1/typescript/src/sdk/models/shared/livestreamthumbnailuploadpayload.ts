import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveStreamThumbnailUploadPayloadFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class LiveStreamThumbnailUploadPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: LiveStreamThumbnailUploadPayloadFile;
}
