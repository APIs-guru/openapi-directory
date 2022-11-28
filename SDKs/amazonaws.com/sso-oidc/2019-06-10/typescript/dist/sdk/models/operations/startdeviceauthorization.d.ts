import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartDeviceAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartDeviceAuthorizationRequestBody extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    startUrl: string;
}
export declare class StartDeviceAuthorizationRequest extends SpeakeasyBase {
    headers: StartDeviceAuthorizationHeaders;
    request: StartDeviceAuthorizationRequestBody;
}
export declare class StartDeviceAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidClientException?: any;
    invalidRequestException?: any;
    slowDownException?: any;
    startDeviceAuthorizationResponse?: shared.StartDeviceAuthorizationResponse;
    statusCode: number;
    unauthorizedClientException?: any;
}
