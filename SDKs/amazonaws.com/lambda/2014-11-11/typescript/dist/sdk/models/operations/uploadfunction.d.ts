import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadFunctionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare enum UploadFunctionModeEnum {
    Event = "event"
}
export declare enum UploadFunctionRuntimeEnum {
    Nodejs = "nodejs"
}
export declare class UploadFunctionQueryParams extends SpeakeasyBase {
    description?: string;
    handler: string;
    memorySize?: number;
    mode: UploadFunctionModeEnum;
    role: string;
    runtime: UploadFunctionRuntimeEnum;
    timeout?: number;
}
export declare class UploadFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UploadFunctionRequestBody extends SpeakeasyBase {
    functionZip: string;
}
export declare class UploadFunctionRequest extends SpeakeasyBase {
    pathParams: UploadFunctionPathParams;
    queryParams: UploadFunctionQueryParams;
    headers: UploadFunctionHeaders;
    request: UploadFunctionRequestBody;
}
export declare class UploadFunctionResponse extends SpeakeasyBase {
    contentType: string;
    functionConfiguration?: shared.FunctionConfiguration;
    invalidParameterValueException?: shared.InvalidParameterValueException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
