import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class InvokeEndpointAsyncPathParams extends SpeakeasyBase {
    endpointName: string;
}
export declare class InvokeEndpointAsyncHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmznSageMakerAccept?: string;
    xAmznSageMakerContentType?: string;
    xAmznSageMakerCustomAttributes?: string;
    xAmznSageMakerInferenceId?: string;
    xAmznSageMakerInputLocation: string;
    xAmznSageMakerRequestTtlSeconds?: number;
}
export declare class InvokeEndpointAsyncRequest extends SpeakeasyBase {
    pathParams: InvokeEndpointAsyncPathParams;
    headers: InvokeEndpointAsyncHeaders;
}
export declare class InvokeEndpointAsyncResponse extends SpeakeasyBase {
    contentType: string;
    internalFailure?: any;
    invokeEndpointAsyncOutput?: shared.InvokeEndpointAsyncOutput;
    serviceUnavailable?: any;
    statusCode: number;
    validationError?: any;
}
