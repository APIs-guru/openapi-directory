import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEndpointPathParams extends SpeakeasyBase {
    applicationId: string;
    endpointId: string;
}
export declare class GetEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEndpointRequest extends SpeakeasyBase {
    pathParams: GetEndpointPathParams;
    headers: GetEndpointHeaders;
}
export declare class GetEndpointResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getEndpointResponse?: shared.GetEndpointResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
