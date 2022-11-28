import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CaptionsUploadPayloadFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class CaptionsUploadPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: CaptionsUploadPayloadFile;
}
