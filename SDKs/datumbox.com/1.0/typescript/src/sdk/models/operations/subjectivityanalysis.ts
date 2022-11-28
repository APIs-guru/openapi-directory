import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubjectivityAnalysisRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=text;" })
  text?: string;
}


export class SubjectivityAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: SubjectivityAnalysisRequestBody;
}


export class SubjectivityAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
