import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomDataIdentifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCustomDataIdentifierRequestBody extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    ignoreWords?: string[];
    keywords?: string[];
    maximumMatchDistance?: number;
    name?: string;
    regex?: string;
    tags?: Map<string, string>;
}
export declare class CreateCustomDataIdentifierRequest extends SpeakeasyBase {
    headers: CreateCustomDataIdentifierHeaders;
    request: CreateCustomDataIdentifierRequestBody;
}
export declare class CreateCustomDataIdentifierResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createCustomDataIdentifierResponse?: shared.CreateCustomDataIdentifierResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
