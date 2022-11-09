import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutFunctionConcurrencyPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class PutFunctionConcurrencyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFunctionConcurrencyRequestBody extends SpeakeasyBase {
    reservedConcurrentExecutions: number;
}
export declare class PutFunctionConcurrencyRequest extends SpeakeasyBase {
    pathParams: PutFunctionConcurrencyPathParams;
    headers: PutFunctionConcurrencyHeaders;
    request: PutFunctionConcurrencyRequestBody;
}
export declare class PutFunctionConcurrencyResponse extends SpeakeasyBase {
    concurrency?: shared.Concurrency;
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
