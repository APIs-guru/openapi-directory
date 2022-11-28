import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningListAlertsInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListAlertsInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class CodeScanningListAlertsInstances503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListAlertsInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningListAlertsInstancesPathParams;

  @SpeakeasyMetadata()
  queryParams: CodeScanningListAlertsInstancesQueryParams;
}


export class CodeScanningListAlertsInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.CodeScanningAlertInstance })
  codeScanningAlertInstances?: shared.CodeScanningAlertInstance[];

  @SpeakeasyMetadata()
  codeScanningListAlertsInstances503ApplicationJsonObject?: CodeScanningListAlertsInstances503ApplicationJson;
}
