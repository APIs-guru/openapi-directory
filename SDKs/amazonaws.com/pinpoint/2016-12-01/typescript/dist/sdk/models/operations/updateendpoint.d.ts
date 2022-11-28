import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEndpointPathParams extends SpeakeasyBase {
    applicationId: string;
    endpointId: string;
}
export declare class UpdateEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the channel type and other settings for an endpoint.
**/
export declare class UpdateEndpointRequestBodyEndpointRequest extends SpeakeasyBase {
    address?: string;
    attributes?: Map<string, string[]>;
    channelType?: shared.ChannelTypeEnum;
    demographic?: shared.EndpointDemographic;
    effectiveDate?: string;
    endpointStatus?: string;
    location?: shared.EndpointLocation;
    metrics?: Map<string, number>;
    optOut?: string;
    requestId?: string;
    user?: shared.EndpointUser;
}
export declare class UpdateEndpointRequestBody extends SpeakeasyBase {
    endpointRequest: UpdateEndpointRequestBodyEndpointRequest;
}
export declare class UpdateEndpointRequest extends SpeakeasyBase {
    pathParams: UpdateEndpointPathParams;
    headers: UpdateEndpointHeaders;
    request: UpdateEndpointRequestBody;
}
export declare class UpdateEndpointResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEndpointResponse?: shared.UpdateEndpointResponse;
}
