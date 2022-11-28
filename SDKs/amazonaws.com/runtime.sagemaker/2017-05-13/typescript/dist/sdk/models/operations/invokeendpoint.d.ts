import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvokeEndpointPathParams extends SpeakeasyBase {
    endpointName: string;
}
export declare class InvokeEndpointHeaders extends SpeakeasyBase {
    accept?: string;
    contentType?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznSageMakerCustomAttributes?: string;
    xAmznSageMakerInferenceId?: string;
    xAmznSageMakerTargetContainerHostname?: string;
    xAmznSageMakerTargetModel?: string;
    xAmznSageMakerTargetVariant?: string;
}
export declare class InvokeEndpointRequestBody extends SpeakeasyBase {
    body: string;
}
export declare class InvokeEndpointRequest extends SpeakeasyBase {
    pathParams: InvokeEndpointPathParams;
    headers: InvokeEndpointHeaders;
    request: InvokeEndpointRequestBody;
}
export declare class InvokeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    internalFailure?: any;
    invokeEndpointOutput?: shared.InvokeEndpointOutput;
    modelError?: any;
    serviceUnavailable?: any;
    statusCode: number;
    validationError?: any;
}
