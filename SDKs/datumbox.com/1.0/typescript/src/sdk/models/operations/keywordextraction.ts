import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeywordExtractionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=n;" })
  n?: number;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class KeywordExtractionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: KeywordExtractionRequestBody;
}


export class KeywordExtractionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
