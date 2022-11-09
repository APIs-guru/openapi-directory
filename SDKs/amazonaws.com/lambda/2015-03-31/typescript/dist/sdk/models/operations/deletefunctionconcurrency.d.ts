import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteFunctionConcurrencyPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class DeleteFunctionConcurrencyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionConcurrencyRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionConcurrencyPathParams;
    headers: DeleteFunctionConcurrencyHeaders;
}
export declare class DeleteFunctionConcurrencyResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
