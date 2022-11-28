import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFunctionConfigurationPathParams extends SpeakeasyBase {
    functionName: string;
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
    headers: GetFunctionConfigurationHeaders;
}
export declare class GetFunctionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
