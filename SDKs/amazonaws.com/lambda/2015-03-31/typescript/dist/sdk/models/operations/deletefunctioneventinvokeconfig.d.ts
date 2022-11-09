import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class DeleteFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class DeleteFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteFunctionEventInvokeConfigRequest extends SpeakeasyBase {
    pathParams: DeleteFunctionEventInvokeConfigPathParams;
    queryParams: DeleteFunctionEventInvokeConfigQueryParams;
    headers: DeleteFunctionEventInvokeConfigHeaders;
}
export declare class DeleteFunctionEventInvokeConfigResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
