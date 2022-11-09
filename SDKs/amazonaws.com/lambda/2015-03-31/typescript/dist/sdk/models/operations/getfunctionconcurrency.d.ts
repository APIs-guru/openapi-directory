import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFunctionConcurrencyPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetFunctionConcurrencyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionConcurrencyRequest extends SpeakeasyBase {
    pathParams: GetFunctionConcurrencyPathParams;
    headers: GetFunctionConcurrencyHeaders;
}
export declare class GetFunctionConcurrencyResponse extends SpeakeasyBase {
    contentType: string;
    getFunctionConcurrencyResponse?: shared.GetFunctionConcurrencyResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
