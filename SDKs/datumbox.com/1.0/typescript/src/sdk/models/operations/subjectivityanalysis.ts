import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubjectivityAnalysisRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class SubjectivityAnalysisRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: SubjectivityAnalysisRequestBody;
}


export class SubjectivityAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
