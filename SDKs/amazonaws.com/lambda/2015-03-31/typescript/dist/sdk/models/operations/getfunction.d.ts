import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFunctionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetFunctionQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class GetFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionRequest extends SpeakeasyBase {
    pathParams: GetFunctionPathParams;
    queryParams: GetFunctionQueryParams;
    headers: GetFunctionHeaders;
}
export declare class GetFunctionResponse extends SpeakeasyBase {
    contentType: string;
    getFunctionResponse?: shared.GetFunctionResponse;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
