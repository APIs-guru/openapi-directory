import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserEndpointsPathParams extends SpeakeasyBase {
    applicationId: string;
    userId: string;
}
export declare class GetUserEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUserEndpointsRequest extends SpeakeasyBase {
    pathParams: GetUserEndpointsPathParams;
    headers: GetUserEndpointsHeaders;
}
export declare class GetUserEndpointsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getUserEndpointsResponse?: shared.GetUserEndpointsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
