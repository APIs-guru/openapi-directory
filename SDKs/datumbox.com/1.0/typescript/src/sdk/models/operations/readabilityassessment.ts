import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReadabilityAssessmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class ReadabilityAssessmentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: ReadabilityAssessmentRequestBody;
}


export class ReadabilityAssessmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
