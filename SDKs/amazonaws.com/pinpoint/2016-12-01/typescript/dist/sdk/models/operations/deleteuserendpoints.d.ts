import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserEndpointsPathParams extends SpeakeasyBase {
    applicationId: string;
    userId: string;
}
export declare class DeleteUserEndpointsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteUserEndpointsRequest extends SpeakeasyBase {
    pathParams: DeleteUserEndpointsPathParams;
    headers: DeleteUserEndpointsHeaders;
}
export declare class DeleteUserEndpointsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteUserEndpointsResponse?: shared.DeleteUserEndpointsResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
