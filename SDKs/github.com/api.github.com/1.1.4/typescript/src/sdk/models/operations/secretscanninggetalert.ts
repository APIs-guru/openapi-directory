import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretScanningGetAlertPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=alert_number" })
  alertNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class SecretScanningGetAlertRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretScanningGetAlertPathParams;
}


export class SecretScanningGetAlert503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SecretScanningGetAlertResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  secretScanningAlert?: shared.SecretScanningAlert;

  @Metadata()
  secretScanningGetAlert503ApplicationJsonObject?: SecretScanningGetAlert503ApplicationJson;
}
