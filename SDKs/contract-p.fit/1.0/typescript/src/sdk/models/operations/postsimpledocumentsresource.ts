import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostSimpleDocumentsResourceRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostSimpleDocumentsResourceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PostSimpleDocumentsResourceRequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=inbox_id" })
  inboxId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=key_value_flag" })
  keyValueFlag?: boolean;
}


export class PostSimpleDocumentsResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostSimpleDocumentsResourceRequestBody;
}


export class PostSimpleDocumentsResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
