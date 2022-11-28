import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachmentRequestFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}

export enum AttachmentRequestResourceSubtypeEnum {
    AsanaFileAttachments = "asana_file_attachments",
    External = "external"
}


export class AttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: AttachmentRequestFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=resource_subtype" })
  resourceSubtype?: AttachmentRequestResourceSubtypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=url" })
  url?: string;
}
