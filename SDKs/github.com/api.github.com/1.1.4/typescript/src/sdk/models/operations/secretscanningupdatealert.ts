import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretScanningUpdateAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class SecretScanningUpdateAlertRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=state" })
  state: shared.SecretScanningAlertStateEnum;
}


export class SecretScanningUpdateAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretScanningUpdateAlertPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SecretScanningUpdateAlertRequestBody;
}


export class SecretScanningUpdateAlert503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SecretScanningUpdateAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  secretScanningAlert?: shared.SecretScanningAlert;

  @Metadata()
  secretScanningUpdateAlert503ApplicationJsonObject?: SecretScanningUpdateAlert503ApplicationJson;
}
