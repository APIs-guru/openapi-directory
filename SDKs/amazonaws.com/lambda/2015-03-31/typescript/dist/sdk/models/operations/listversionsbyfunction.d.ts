import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVersionsByFunctionPathParams extends SpeakeasyBase {
    functionName: string;
}
export declare class ListVersionsByFunctionQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
}
export declare class ListVersionsByFunctionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListVersionsByFunctionRequest extends SpeakeasyBase {
    pathParams: ListVersionsByFunctionPathParams;
    queryParams: ListVersionsByFunctionQueryParams;
    headers: ListVersionsByFunctionHeaders;
}
export declare class ListVersionsByFunctionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listVersionsByFunctionResponse?: shared.ListVersionsByFunctionResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
