import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretScanningListAlertsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum SecretScanningListAlertsForRepoStateEnum {
    Open = "open"
,    Resolved = "resolved"
}


export class SecretScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: SecretScanningListAlertsForRepoStateEnum;
}


export class SecretScanningListAlertsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretScanningListAlertsForRepoPathParams;

  @Metadata()
  queryParams: SecretScanningListAlertsForRepoQueryParams;
}


export class SecretScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SecretScanningListAlertsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.SecretScanningAlert })
  secretScanningAlerts?: shared.SecretScanningAlert[];

  @Metadata()
  secretScanningListAlertsForRepo503ApplicationJsonObject?: SecretScanningListAlertsForRepo503ApplicationJson;
}
