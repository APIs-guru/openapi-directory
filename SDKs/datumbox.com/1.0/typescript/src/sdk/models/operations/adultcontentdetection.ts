import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AdultContentDetectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class AdultContentDetectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: AdultContentDetectionRequestBody;
}


export class AdultContentDetectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
