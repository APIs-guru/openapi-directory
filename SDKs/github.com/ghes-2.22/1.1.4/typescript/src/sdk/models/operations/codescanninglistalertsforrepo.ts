import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CodeScanningListAlertsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class CodeScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ref" })
  ref?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: shared.CodeScanningAlertStateEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tool_guid" })
  toolGuid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tool_name" })
  toolName?: string;
}


export class CodeScanningListAlertsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CodeScanningListAlertsForRepoPathParams;

  @Metadata()
  queryParams: CodeScanningListAlertsForRepoQueryParams;
}


export class CodeScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CodeScanningListAlertsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.CodeScanningAlertItems })
  codeScanningAlertItems?: shared.CodeScanningAlertItems[];

  @Metadata()
  codeScanningListAlertsForRepo503ApplicationJsonObject?: CodeScanningListAlertsForRepo503ApplicationJson;
}
