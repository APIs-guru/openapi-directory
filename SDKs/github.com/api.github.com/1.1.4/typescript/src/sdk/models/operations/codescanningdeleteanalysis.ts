import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningDeleteAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=analysis_id" })
  analysisId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningDeleteAnalysisQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=confirm_delete" })
  confirmDelete?: string;
}


export class CodeScanningDeleteAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningDeleteAnalysisPathParams;

  @Metadata()
  queryParams: CodeScanningDeleteAnalysisQueryParams;
}


export class CodeScanningDeleteAnalysis503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningDeleteAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeScanningAnalysisDeletion?: shared.CodeScanningAnalysisDeletion;

  @Metadata()
  codeScanningDeleteAnalysis503ApplicationJsonObject?: CodeScanningDeleteAnalysis503ApplicationJson;

  @Metadata()
  scimError?: shared.ScimError;
}
