import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterDeviceQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class RegisterDeviceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class RegisterDeviceRequest extends SpeakeasyBase {
    queryParams: RegisterDeviceQueryParams;
    request: shared.DeviceRegistrationRequest;
    security: RegisterDeviceSecurity;
}
export declare class RegisterDeviceResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
