import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayersUploadLogoPayloadFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PlayersUploadLogoPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PlayersUploadLogoPayloadFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=link" })
  link: string;
}
