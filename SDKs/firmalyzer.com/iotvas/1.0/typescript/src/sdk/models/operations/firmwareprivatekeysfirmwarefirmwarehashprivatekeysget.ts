import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity;
}


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CryptoKey })
  cryptoKeys?: shared.CryptoKey[];

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
