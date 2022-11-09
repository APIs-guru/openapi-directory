import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningGetSarifPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sarif_id" })
  sarifId: string;
}


export class CodeScanningGetSarifRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningGetSarifPathParams;
}


export class CodeScanningGetSarif503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningGetSarifResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeScanningSarifsStatus?: shared.CodeScanningSarifsStatus;

  @Metadata()
  codeScanningGetSarif503ApplicationJsonObject?: CodeScanningGetSarif503ApplicationJson;
}
