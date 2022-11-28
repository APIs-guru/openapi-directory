import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomDataIdentifierPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteCustomDataIdentifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCustomDataIdentifierRequest extends SpeakeasyBase {
    pathParams: DeleteCustomDataIdentifierPathParams;
    headers: DeleteCustomDataIdentifierHeaders;
}
export declare class DeleteCustomDataIdentifierResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteCustomDataIdentifierResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
