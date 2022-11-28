import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDevicesQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetDevicesSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetDevicesRequest extends SpeakeasyBase {
    queryParams: GetDevicesQueryParams;
    security: GetDevicesSecurity;
}
export declare class GetDevicesResponse extends SpeakeasyBase {
    accountDevices?: shared.AccountDevices;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
