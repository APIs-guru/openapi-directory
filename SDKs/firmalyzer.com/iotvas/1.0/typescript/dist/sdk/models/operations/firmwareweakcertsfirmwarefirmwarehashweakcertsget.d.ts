import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest extends SpeakeasyBase {
    pathParams: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams;
    security: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity;
}
export declare class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    weakCerts?: shared.WeakCert[];
}
