import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetectDeviceDetectPostSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class DetectDeviceDetectPostRequest extends SpeakeasyBase {
    request: shared.DeviceFeatures;
    security: DetectDeviceDetectPostSecurity;
}
export declare class DetectDeviceDetectPostResponse extends SpeakeasyBase {
    contentType: string;
    deviceInfo?: shared.DeviceInfo;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
