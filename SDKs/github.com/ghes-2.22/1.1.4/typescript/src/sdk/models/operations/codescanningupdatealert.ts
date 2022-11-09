import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningUpdateAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningUpdateAlertRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismissed_reason" })
  dismissedReason?: shared.CodeScanningAlertDismissedReasonEnum;

  @Metadata({ data: "json, name=state" })
  state: shared.CodeScanningAlertSetStateEnum;
}


export class CodeScanningUpdateAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningUpdateAlertPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CodeScanningUpdateAlertRequestBody;
}


export class CodeScanningUpdateAlert503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningUpdateAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  codeScanningAlert?: shared.CodeScanningAlert;

  @Metadata()
  codeScanningUpdateAlert503ApplicationJsonObject?: CodeScanningUpdateAlert503ApplicationJson;
}
