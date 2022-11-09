import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningListAlertsInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListAlertsInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class CodeScanningListAlertsInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningListAlertsInstancesPathParams;

  @Metadata()
  queryParams: CodeScanningListAlertsInstancesQueryParams;
}


export class CodeScanningListAlertsInstances503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListAlertsInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.CodeScanningAlertInstance })
  codeScanningAlertInstances?: shared.CodeScanningAlertInstance[];

  @Metadata()
  codeScanningListAlertsInstances503ApplicationJsonObject?: CodeScanningListAlertsInstances503ApplicationJson;
}
