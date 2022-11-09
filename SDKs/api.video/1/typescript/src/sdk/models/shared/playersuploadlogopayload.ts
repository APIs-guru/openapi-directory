import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayersUploadLogoPayloadFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PlayersUploadLogoPayload extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: PlayersUploadLogoPayloadFile;

  @Metadata({ data: "multipart_form, name=link" })
  link: string;
}
