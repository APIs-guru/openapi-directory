import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningUpdateAlertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningUpdateAlertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismissed_reason" })
  dismissedReason?: shared.CodeScanningAlertDismissedReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: shared.CodeScanningAlertSetStateEnum;
}


export class CodeScanningUpdateAlert503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningUpdateAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningUpdateAlertPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CodeScanningUpdateAlertRequestBody;
}


export class CodeScanningUpdateAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  codeScanningAlert?: shared.CodeScanningAlert;

  @SpeakeasyMetadata()
  codeScanningUpdateAlert503ApplicationJsonObject?: CodeScanningUpdateAlert503ApplicationJson;
}
