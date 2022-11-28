import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest extends SpeakeasyBase {
    pathParams: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams;
    security: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity;
}
export declare class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse extends SpeakeasyBase {
    contentType: string;
    cryptoKeys?: shared.CryptoKey[];
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
