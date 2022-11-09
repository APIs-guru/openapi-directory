import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningGetAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningGetAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningGetAlertPathParams;
}


export class CodeScanningGetAlert503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningGetAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeScanningAlert?: shared.CodeScanningAlert;

  @Metadata()
  codeScanningGetAlert503ApplicationJsonObject?: CodeScanningGetAlert503ApplicationJson;
}
