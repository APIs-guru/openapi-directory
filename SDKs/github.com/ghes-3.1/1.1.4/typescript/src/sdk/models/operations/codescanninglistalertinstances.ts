import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningListAlertInstancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListAlertInstancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class CodeScanningListAlertInstances503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListAlertInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningListAlertInstancesPathParams;

  @SpeakeasyMetadata()
  queryParams: CodeScanningListAlertInstancesQueryParams;
}


export class CodeScanningListAlertInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.CodeScanningAlertInstance })
  codeScanningAlertInstances?: shared.CodeScanningAlertInstance[];

  @SpeakeasyMetadata()
  codeScanningListAlertInstances503ApplicationJsonObject?: CodeScanningListAlertInstances503ApplicationJson;
}
