import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveAttributesPathParams extends SpeakeasyBase {
    applicationId: string;
    attributeType: string;
}
export declare class RemoveAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
**/
export declare class RemoveAttributesRequestBodyUpdateAttributesRequest extends SpeakeasyBase {
    blacklist?: string[];
}
export declare class RemoveAttributesRequestBody extends SpeakeasyBase {
    updateAttributesRequest: RemoveAttributesRequestBodyUpdateAttributesRequest;
}
export declare class RemoveAttributesRequest extends SpeakeasyBase {
    pathParams: RemoveAttributesPathParams;
    headers: RemoveAttributesHeaders;
    request: RemoveAttributesRequestBody;
}
export declare class RemoveAttributesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    removeAttributesResponse?: shared.RemoveAttributesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
