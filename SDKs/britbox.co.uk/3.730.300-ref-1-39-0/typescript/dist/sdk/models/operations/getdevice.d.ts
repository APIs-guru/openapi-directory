import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDeviceQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetDeviceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetDeviceRequest extends SpeakeasyBase {
    pathParams: GetDevicePathParams;
    queryParams: GetDeviceQueryParams;
    security: GetDeviceSecurity;
}
export declare class GetDeviceResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
