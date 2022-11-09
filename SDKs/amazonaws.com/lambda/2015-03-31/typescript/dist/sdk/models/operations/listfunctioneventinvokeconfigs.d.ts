import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFunctionEventInvokeConfigsPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class ListFunctionEventInvokeConfigsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
}
export declare class ListFunctionEventInvokeConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionEventInvokeConfigsRequest extends SpeakeasyBase {
    pathParams: ListFunctionEventInvokeConfigsPathParams;
    queryParams: ListFunctionEventInvokeConfigsQueryParams;
    headers: ListFunctionEventInvokeConfigsHeaders;
}
export declare class ListFunctionEventInvokeConfigsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listFunctionEventInvokeConfigsResponse?: shared.ListFunctionEventInvokeConfigsResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
