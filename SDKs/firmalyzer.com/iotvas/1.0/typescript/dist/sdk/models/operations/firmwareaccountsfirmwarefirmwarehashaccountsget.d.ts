import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest extends SpeakeasyBase {
    pathParams: FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams;
    security: FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity;
}
export declare class FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse extends SpeakeasyBase {
    contentType: string;
    defaultAccounts?: shared.DefaultAccount[];
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
