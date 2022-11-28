import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommercialDetectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=text;" })
  text?: string;
}


export class CommercialDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CommercialDetectionRequestBody;
}


export class CommercialDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
