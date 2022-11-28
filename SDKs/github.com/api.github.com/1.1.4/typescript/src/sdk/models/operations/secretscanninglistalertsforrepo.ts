import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SecretScanningListAlertsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum SecretScanningListAlertsForRepoStateEnum {
    Open = "open",
    Resolved = "resolved"
}


export class SecretScanningListAlertsForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: SecretScanningListAlertsForRepoStateEnum;
}


export class SecretScanningListAlertsForRepo503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SecretScanningListAlertsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretScanningListAlertsForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: SecretScanningListAlertsForRepoQueryParams;
}


export class SecretScanningListAlertsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SecretScanningAlert })
  secretScanningAlerts?: shared.SecretScanningAlert[];

  @SpeakeasyMetadata()
  secretScanningListAlertsForRepo503ApplicationJsonObject?: SecretScanningListAlertsForRepo503ApplicationJson;
}
