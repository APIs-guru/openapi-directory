import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TwitterSentimentAnalysisRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class TwitterSentimentAnalysisRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: TwitterSentimentAnalysisRequestBody;
}


export class TwitterSentimentAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
