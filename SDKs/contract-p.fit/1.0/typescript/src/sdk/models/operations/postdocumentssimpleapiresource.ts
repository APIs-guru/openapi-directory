import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDocumentsSimpleApiResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inbox_id" })
  inboxId: string;
}


export class PostDocumentsSimpleApiResourceRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostDocumentsSimpleApiResourceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PostDocumentsSimpleApiResourceRequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=hints" })
  hints?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=key_value_flag" })
  keyValueFlag?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=sync" })
  sync?: boolean;
}


export class PostDocumentsSimpleApiResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDocumentsSimpleApiResourcePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostDocumentsSimpleApiResourceRequestBody;
}


export class PostDocumentsSimpleApiResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
