import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningDeleteAnalysisPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_id" })
  analysisId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningDeleteAnalysisQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=confirm_delete" })
  confirmDelete?: string;
}


export class CodeScanningDeleteAnalysis503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningDeleteAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningDeleteAnalysisPathParams;

  @SpeakeasyMetadata()
  queryParams: CodeScanningDeleteAnalysisQueryParams;
}


export class CodeScanningDeleteAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  codeScanningAnalysisDeletion?: shared.CodeScanningAnalysisDeletion;

  @SpeakeasyMetadata()
  codeScanningDeleteAnalysis503ApplicationJsonObject?: CodeScanningDeleteAnalysis503ApplicationJson;

  @SpeakeasyMetadata()
  scimError?: shared.ScimError;
}
