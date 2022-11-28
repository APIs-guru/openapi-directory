import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetCustomDataIdentifiersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetCustomDataIdentifiersRequestBody extends SpeakeasyBase {
    ids?: string[];
}
export declare class BatchGetCustomDataIdentifiersRequest extends SpeakeasyBase {
    headers: BatchGetCustomDataIdentifiersHeaders;
    request: BatchGetCustomDataIdentifiersRequestBody;
}
export declare class BatchGetCustomDataIdentifiersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchGetCustomDataIdentifiersResponse?: shared.BatchGetCustomDataIdentifiersResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
