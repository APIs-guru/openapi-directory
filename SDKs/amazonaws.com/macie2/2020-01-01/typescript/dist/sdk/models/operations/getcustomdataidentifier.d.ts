import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomDataIdentifierPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCustomDataIdentifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCustomDataIdentifierRequest extends SpeakeasyBase {
    pathParams: GetCustomDataIdentifierPathParams;
    headers: GetCustomDataIdentifierHeaders;
}
export declare class GetCustomDataIdentifierResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getCustomDataIdentifierResponse?: shared.GetCustomDataIdentifierResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
