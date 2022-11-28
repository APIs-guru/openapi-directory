import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvokeAsyncPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class InvokeAsyncHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InvokeAsyncRequestBody extends SpeakeasyBase {
    invokeArgs: string;
}
export declare class InvokeAsyncRequest extends SpeakeasyBase {
    pathParams: InvokeAsyncPathParams;
    headers: InvokeAsyncHeaders;
    request: InvokeAsyncRequestBody;
}
export declare class InvokeAsyncResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestContentException?: any;
    invalidRuntimeException?: any;
    invokeAsyncResponse?: shared.InvokeAsyncResponse;
    resourceConflictException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
}
