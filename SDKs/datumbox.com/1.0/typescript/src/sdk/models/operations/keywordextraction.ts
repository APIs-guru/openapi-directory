import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeywordExtractionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=n;" })
  n?: number;

  @SpeakeasyMetadata({ data: "form, name=text;" })
  text?: string;
}


export class KeywordExtractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: KeywordExtractionRequestBody;
}


export class KeywordExtractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
