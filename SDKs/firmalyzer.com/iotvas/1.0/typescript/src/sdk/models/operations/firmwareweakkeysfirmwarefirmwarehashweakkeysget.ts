import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams;

  @Metadata()
  security: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity;
}


export class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CryptoKey })
  cryptoKeys?: shared.CryptoKey[];

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
