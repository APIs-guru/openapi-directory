import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFunctionConfigurationPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class UpdateFunctionConfigurationQueryParams extends SpeakeasyBase {
    description?: string;
    handler?: string;
    memorySize?: number;
    role?: string;
    timeout?: number;
}
export declare class UpdateFunctionConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFunctionConfigurationRequest extends SpeakeasyBase {
    pathParams: UpdateFunctionConfigurationPathParams;
    queryParams: UpdateFunctionConfigurationQueryParams;
    headers: UpdateFunctionConfigurationHeaders;
}
export declare class UpdateFunctionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    invalidParameterValueException?: shared.InvalidParameterValueException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
