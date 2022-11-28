import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class UpdateFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class UpdateFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
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
export declare class UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig extends SpeakeasyBase {
    onFailure?: shared.OnFailure;
    onSuccess?: shared.OnSuccess;
}
export declare class UpdateFunctionEventInvokeConfigRequestBody extends SpeakeasyBase {
    destinationConfig?: UpdateFunctionEventInvokeConfigRequestBodyDestinationConfig;
    maximumEventAgeInSeconds?: number;
    maximumRetryAttempts?: number;
}
export declare class UpdateFunctionEventInvokeConfigRequest extends SpeakeasyBase {
    pathParams: UpdateFunctionEventInvokeConfigPathParams;
    queryParams: UpdateFunctionEventInvokeConfigQueryParams;
    headers: UpdateFunctionEventInvokeConfigHeaders;
    request: UpdateFunctionEventInvokeConfigRequestBody;
}
export declare class UpdateFunctionEventInvokeConfigResponse extends SpeakeasyBase {
    contentType: string;
    functionEventInvokeConfig?: shared.FunctionEventInvokeConfig;
    invalidParameterValueException?: any;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
