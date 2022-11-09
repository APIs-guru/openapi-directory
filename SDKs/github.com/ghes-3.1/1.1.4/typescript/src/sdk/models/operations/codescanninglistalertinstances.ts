import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningListAlertInstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListAlertInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;
}


export class CodeScanningListAlertInstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningListAlertInstancesPathParams;

  @Metadata()
  queryParams: CodeScanningListAlertInstancesQueryParams;
}


export class CodeScanningListAlertInstances503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListAlertInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.CodeScanningAlertInstance })
  codeScanningAlertInstances?: shared.CodeScanningAlertInstance[];

  @Metadata()
  codeScanningListAlertInstances503ApplicationJsonObject?: CodeScanningListAlertInstances503ApplicationJson;
}
