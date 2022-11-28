import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity;
}


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CryptoKey })
  cryptoKeys?: shared.CryptoKey[];

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
