import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CodeScanningListAlertsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: shared.CodeScanningAlertStateEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tool_guid" })
  toolGuid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tool_name" })
  toolName?: string;
}


export class CodeScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListAlertsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CodeScanningListAlertsForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: CodeScanningListAlertsForRepoQueryParams;
}


export class CodeScanningListAlertsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.CodeScanningAlertItems })
  codeScanningAlertItems?: shared.CodeScanningAlertItems[];

  @SpeakeasyMetadata()
  codeScanningListAlertsForRepo503ApplicationJsonObject?: CodeScanningListAlertsForRepo503ApplicationJson;
}
