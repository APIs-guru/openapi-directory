import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFunctionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class DeleteFunctionQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class DeleteFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionPathParams;
    queryParams: DeleteFunctionQueryParams;
    headers: DeleteFunctionHeaders;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
