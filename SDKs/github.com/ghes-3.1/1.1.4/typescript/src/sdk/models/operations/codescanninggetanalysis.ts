import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningGetAnalysisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=analysis_id" })
  analysisId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningGetAnalysisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningGetAnalysisPathParams;
}


export class CodeScanningGetAnalysis503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningGetAnalysisResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeScanningAnalysis?: shared.CodeScanningAnalysis;

  @Metadata()
  codeScanningGetAnalysis200ApplicationJsonPlusSarifString?: string;

  @Metadata()
  codeScanningGetAnalysis503ApplicationJsonObject?: CodeScanningGetAnalysis503ApplicationJson;
}
