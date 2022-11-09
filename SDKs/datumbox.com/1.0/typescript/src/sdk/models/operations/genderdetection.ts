import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenderDetectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class GenderDetectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: GenderDetectionRequestBody;
}


export class GenderDetectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
