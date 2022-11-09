import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams;

  @Metadata()
  security: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity;
}


export class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ExpiredCert })
  expiredCerts?: shared.ExpiredCert[];

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
