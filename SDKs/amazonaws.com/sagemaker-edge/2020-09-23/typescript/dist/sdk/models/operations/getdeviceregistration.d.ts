import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeviceRegistrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeviceRegistrationRequestBody extends SpeakeasyBase {
    deviceFleetName: string;
    deviceName: string;
}
export declare class GetDeviceRegistrationRequest extends SpeakeasyBase {
    headers: GetDeviceRegistrationHeaders;
    request: GetDeviceRegistrationRequestBody;
}
export declare class GetDeviceRegistrationResponse extends SpeakeasyBase {
    contentType: string;
    getDeviceRegistrationResult?: shared.GetDeviceRegistrationResult;
    internalServiceException?: any;
    statusCode: number;
}
