import { SpeakeasyBase } from "../../../internal/utils/utils";
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
    invalidRequestContentException?: shared.InvalidRequestContentException;
    invokeAsyncResponse?: shared.InvokeAsyncResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
