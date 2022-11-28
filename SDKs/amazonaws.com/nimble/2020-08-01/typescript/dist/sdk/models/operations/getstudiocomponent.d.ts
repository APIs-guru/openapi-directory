import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudioComponentPathParams extends SpeakeasyBase {
    studioComponentId: string;
    studioId: string;
}
export declare class GetStudioComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStudioComponentRequest extends SpeakeasyBase {
    pathParams: GetStudioComponentPathParams;
    headers: GetStudioComponentHeaders;
}
export declare class GetStudioComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getStudioComponentResponse?: shared.GetStudioComponentResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
