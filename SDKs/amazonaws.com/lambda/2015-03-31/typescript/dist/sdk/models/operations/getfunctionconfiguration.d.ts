import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFunctionConfigurationPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class GetFunctionConfigurationQueryParams extends SpeakeasyBase {
    qualifier?: string;
}
export declare class GetFunctionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionConfigurationRequest extends SpeakeasyBase {
    pathParams: GetFunctionConfigurationPathParams;
    queryParams: GetFunctionConfigurationQueryParams;
    headers: GetFunctionConfigurationHeaders;
}
export declare class GetFunctionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    invalidParameterValueException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
