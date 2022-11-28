import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEulaPathParams extends SpeakeasyBase {
    eulaId: string;
}
export declare class GetEulaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEulaRequest extends SpeakeasyBase {
    pathParams: GetEulaPathParams;
    headers: GetEulaHeaders;
}
export declare class GetEulaResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getEulaResponse?: shared.GetEulaResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
