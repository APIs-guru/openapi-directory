import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEndpointPathParams extends SpeakeasyBase {
    applicationId: string;
    endpointId: string;
}
export declare class DeleteEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEndpointRequest extends SpeakeasyBase {
    pathParams: DeleteEndpointPathParams;
    headers: DeleteEndpointHeaders;
}
export declare class DeleteEndpointResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteEndpointResponse?: shared.DeleteEndpointResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
