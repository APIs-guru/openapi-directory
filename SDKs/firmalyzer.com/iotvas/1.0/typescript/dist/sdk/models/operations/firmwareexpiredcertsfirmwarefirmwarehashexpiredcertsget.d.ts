import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest extends SpeakeasyBase {
    pathParams: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams;
    security: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity;
}
export declare class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse extends SpeakeasyBase {
    contentType: string;
    expiredCerts?: shared.ExpiredCert[];
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
