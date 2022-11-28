import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestCustomDataIdentifierHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestCustomDataIdentifierRequestBody extends SpeakeasyBase {
    ignoreWords?: string[];
    keywords?: string[];
    maximumMatchDistance?: number;
    regex: string;
    sampleText: string;
}
export declare class TestCustomDataIdentifierRequest extends SpeakeasyBase {
    headers: TestCustomDataIdentifierHeaders;
    request: TestCustomDataIdentifierRequestBody;
}
export declare class TestCustomDataIdentifierResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    testCustomDataIdentifierResponse?: shared.TestCustomDataIdentifierResponse;
    throttlingException?: any;
    validationException?: any;
}
