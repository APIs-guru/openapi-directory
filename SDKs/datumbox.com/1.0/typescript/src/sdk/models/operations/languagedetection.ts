import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LanguageDetectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class LanguageDetectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: LanguageDetectionRequestBody;
}


export class LanguageDetectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
