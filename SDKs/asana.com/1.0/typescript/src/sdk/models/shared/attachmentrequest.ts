import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachmentRequestFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}

export enum AttachmentRequestResourceSubtypeEnum {
    AsanaFileAttachments = "asana_file_attachments"
,    External = "external"
}


export class AttachmentRequest extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: AttachmentRequestFile;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=resource_subtype" })
  resourceSubtype?: AttachmentRequestResourceSubtypeEnum;

  @Metadata({ data: "multipart_form, name=url" })
  url?: string;
}
