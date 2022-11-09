import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostMakePdfRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PostMakePdfRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostMakePdfRequestBody;
}


export class PostMakePdfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postMakePdf200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
