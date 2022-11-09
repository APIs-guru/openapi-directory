import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFunctionEventInvokeConfigPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetFunctionEventInvokeConfigQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class GetFunctionEventInvokeConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionEventInvokeConfigRequest extends SpeakeasyBase {
    pathParams: GetFunctionEventInvokeConfigPathParams;
    queryParams: GetFunctionEventInvokeConfigQueryParams;
    headers: GetFunctionEventInvokeConfigHeaders;
}
export declare class GetFunctionEventInvokeConfigResponse extends SpeakeasyBase {
    contentType: string;
    functionEventInvokeConfig?: shared.FunctionEventInvokeConfig;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
