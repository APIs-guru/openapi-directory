import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TextExtractionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=text;" })
  text?: string;
}


export class TextExtractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: TextExtractionRequestBody;
}


export class TextExtractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
