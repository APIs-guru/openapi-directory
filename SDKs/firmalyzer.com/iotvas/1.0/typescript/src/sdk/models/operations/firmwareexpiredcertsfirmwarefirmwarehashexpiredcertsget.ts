import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity;
}


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ExpiredCert })
  expiredCerts?: shared.ExpiredCert[];

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
