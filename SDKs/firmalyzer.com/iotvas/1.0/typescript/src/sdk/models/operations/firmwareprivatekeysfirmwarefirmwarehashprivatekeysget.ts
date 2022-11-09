import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams;

  @Metadata()
  security: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity;
}


export class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CryptoKey })
  cryptoKeys?: shared.CryptoKey[];

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
