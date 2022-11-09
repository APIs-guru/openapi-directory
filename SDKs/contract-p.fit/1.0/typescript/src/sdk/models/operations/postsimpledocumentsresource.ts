import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSimpleDocumentsResourceRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostSimpleDocumentsResourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: PostSimpleDocumentsResourceRequestBodyFile;

  @Metadata({ data: "multipart_form, name=inbox_id" })
  inboxId?: string;

  @Metadata({ data: "multipart_form, name=key_value_flag" })
  keyValueFlag?: boolean;
}


export class PostSimpleDocumentsResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostSimpleDocumentsResourceRequestBody;
}


export class PostSimpleDocumentsResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
