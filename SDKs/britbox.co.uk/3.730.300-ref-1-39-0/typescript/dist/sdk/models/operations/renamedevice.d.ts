import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameDevicePathParams extends SpeakeasyBase {
    id: string;
}
export declare class RenameDeviceQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    name: string;
}
export declare class RenameDeviceSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class RenameDeviceRequest extends SpeakeasyBase {
    pathParams: RenameDevicePathParams;
    queryParams: RenameDeviceQueryParams;
    security: RenameDeviceSecurity;
}
export declare class RenameDeviceResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
