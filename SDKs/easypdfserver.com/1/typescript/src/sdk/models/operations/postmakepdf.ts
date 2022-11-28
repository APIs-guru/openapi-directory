import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostMakePdfRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PostMakePdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostMakePdfRequestBody;
}


export class PostMakePdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postMakePdf200ApplicationPdfBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
