import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams;

  @Metadata()
  security: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity;
}


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WeakCert })
  weakCerts?: shared.WeakCert[];
}
