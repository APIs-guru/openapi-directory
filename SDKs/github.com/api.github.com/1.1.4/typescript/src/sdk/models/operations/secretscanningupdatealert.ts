import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SecretScanningUpdateAlertPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class SecretScanningUpdateAlertRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: shared.SecretScanningAlertStateEnum;
}


export class SecretScanningUpdateAlert503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SecretScanningUpdateAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretScanningUpdateAlertPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SecretScanningUpdateAlertRequestBody;
}


export class SecretScanningUpdateAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  secretScanningAlert?: shared.SecretScanningAlert;

  @SpeakeasyMetadata()
  secretScanningUpdateAlert503ApplicationJsonObject?: SecretScanningUpdateAlert503ApplicationJson;
}
