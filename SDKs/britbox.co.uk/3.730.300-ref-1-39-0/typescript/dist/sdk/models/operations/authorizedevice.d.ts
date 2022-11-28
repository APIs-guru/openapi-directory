import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AuthorizeDeviceQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class AuthorizeDeviceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class AuthorizeDeviceRequest extends SpeakeasyBase {
    queryParams: AuthorizeDeviceQueryParams;
    request: shared.DeviceAuthorizationCode;
    security: AuthorizeDeviceSecurity;
}
export declare class AuthorizeDeviceResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
