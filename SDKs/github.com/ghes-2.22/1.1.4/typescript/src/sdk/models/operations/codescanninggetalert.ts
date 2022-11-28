import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningGetAlertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningGetAlert503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningGetAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningGetAlertPathParams;
}


export class CodeScanningGetAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  codeScanningAlert?: shared.CodeScanningAlert;

  @SpeakeasyMetadata()
  codeScanningGetAlert503ApplicationJsonObject?: CodeScanningGetAlert503ApplicationJson;
}
