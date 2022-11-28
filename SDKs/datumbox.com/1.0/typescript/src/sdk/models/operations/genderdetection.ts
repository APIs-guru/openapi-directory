import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenderDetectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=text;" })
  text?: string;
}


export class GenderDetectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: GenderDetectionRequestBody;
}


export class GenderDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
