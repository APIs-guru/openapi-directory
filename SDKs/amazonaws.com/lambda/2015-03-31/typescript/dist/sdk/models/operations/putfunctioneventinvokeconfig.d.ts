import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class PutFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class PutFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export declare class PutFunctionEventInvokeConfigRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
export declare class PutFunctionEventInvokeConfigRequestBody extends SpeakeasyBase {
    destinationConfig?: PutFunctionEventInvokeConfigRequestBodyDestinationConfig;
    maximumEventAgeInSeconds?: number;
    maximumRetryAttempts?: number;
}
export declare class PutFunctionEventInvokeConfigRequest extends SpeakeasyBase {
    pathParams: PutFunctionEventInvokeConfigPathParams;
    queryParams: PutFunctionEventInvokeConfigQueryParams;
    headers: PutFunctionEventInvokeConfigHeaders;
    request: PutFunctionEventInvokeConfigRequestBody;
}
export declare class PutFunctionEventInvokeConfigResponse extends SpeakeasyBase {
    contentType: string;
    functionEventInvokeConfig?: shared.FunctionEventInvokeConfig;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
