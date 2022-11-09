import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TokenUploadPayloadFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class TokenUploadPayload extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: TokenUploadPayloadFile;

  @Metadata({ data: "multipart_form, name=videoId" })
  videoId?: string;
}
