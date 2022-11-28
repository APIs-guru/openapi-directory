import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity;
}


export class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.WeakCert })
  weakCerts?: shared.WeakCert[];
}
