import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningGetSarifPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sarif_id" })
  sarifId: string;
}


export class CodeScanningGetSarif503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningGetSarifRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningGetSarifPathParams;
}


export class CodeScanningGetSarifResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  codeScanningSarifsStatus?: shared.CodeScanningSarifsStatus;

  @SpeakeasyMetadata()
  codeScanningGetSarif503ApplicationJsonObject?: CodeScanningGetSarif503ApplicationJson;
}
