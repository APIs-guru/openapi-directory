import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenUploadPayloadFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class TokenUploadPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: TokenUploadPayloadFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=videoId" })
  videoId?: string;
}
