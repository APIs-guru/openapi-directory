import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwareRiskFirmwareFirmwareHashRiskGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwareRiskFirmwareFirmwareHashRiskGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwareRiskFirmwareFirmwareHashRiskGetRequest extends SpeakeasyBase {
    pathParams: FirmwareRiskFirmwareFirmwareHashRiskGetPathParams;
    security: FirmwareRiskFirmwareFirmwareHashRiskGetSecurity;
}
export declare class FirmwareRiskFirmwareFirmwareHashRiskGetResponse extends SpeakeasyBase {
    contentType: string;
    firmwareRisk?: shared.FirmwareRisk;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
