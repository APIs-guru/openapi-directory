import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostDocumentsSimpleApiResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=inbox_id" })
  inboxId: string;
}


export class PostDocumentsSimpleApiResourceRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostDocumentsSimpleApiResourceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: PostDocumentsSimpleApiResourceRequestBodyFile;

  @Metadata({ data: "multipart_form, name=hints" })
  hints?: string;

  @Metadata({ data: "multipart_form, name=key_value_flag" })
  keyValueFlag?: boolean;

  @Metadata({ data: "multipart_form, name=sync" })
  sync?: boolean;
}


export class PostDocumentsSimpleApiResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostDocumentsSimpleApiResourcePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostDocumentsSimpleApiResourceRequestBody;
}


export class PostDocumentsSimpleApiResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
