import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenerateDeviceAuthorizationCodeQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GenerateDeviceAuthorizationCodeRequest extends SpeakeasyBase {
    queryParams: GenerateDeviceAuthorizationCodeQueryParams;
    request: shared.DeviceRegistrationRequest;
}
export declare class GenerateDeviceAuthorizationCodeResponse extends SpeakeasyBase {
    contentType: string;
    deviceAuthorizationCode?: shared.DeviceAuthorizationCode;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
