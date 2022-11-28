import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeregisterDevicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeregisterDeviceQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class DeregisterDeviceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class DeregisterDeviceRequest extends SpeakeasyBase {
    pathParams: DeregisterDevicePathParams;
    queryParams: DeregisterDeviceQueryParams;
    security: DeregisterDeviceSecurity;
}
export declare class DeregisterDeviceResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
