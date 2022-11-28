import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEndpointsBatchPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateEndpointsBatchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
**/
export declare class UpdateEndpointsBatchRequestBodyEndpointBatchRequest extends SpeakeasyBase {
    item?: shared.EndpointBatchItem[];
}
export declare class UpdateEndpointsBatchRequestBody extends SpeakeasyBase {
    endpointBatchRequest: UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
}
export declare class UpdateEndpointsBatchRequest extends SpeakeasyBase {
    pathParams: UpdateEndpointsBatchPathParams;
    headers: UpdateEndpointsBatchHeaders;
    request: UpdateEndpointsBatchRequestBody;
}
export declare class UpdateEndpointsBatchResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEndpointsBatchResponse?: shared.UpdateEndpointsBatchResponse;
}
