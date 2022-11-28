import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest extends SpeakeasyBase {
    pathParams: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams;
    security: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity;
}
export declare class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKeys?: shared.CryptoKey[];
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
