import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TwitterSentimentAnalysisRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=text;" })
  text?: string;
}


export class TwitterSentimentAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: TwitterSentimentAnalysisRequestBody;
}


export class TwitterSentimentAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
