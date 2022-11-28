import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMacieSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMacieSessionRequest extends SpeakeasyBase {
    headers: GetMacieSessionHeaders;
}
export declare class GetMacieSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getMacieSessionResponse?: shared.GetMacieSessionResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
