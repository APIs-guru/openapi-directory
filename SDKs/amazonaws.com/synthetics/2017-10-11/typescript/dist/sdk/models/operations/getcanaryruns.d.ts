import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCanaryRunsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetCanaryRunsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetCanaryRunsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCanaryRunsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetCanaryRunsRequest extends SpeakeasyBase {
    pathParams: GetCanaryRunsPathParams;
    queryParams: GetCanaryRunsQueryParams;
    headers: GetCanaryRunsHeaders;
    request: GetCanaryRunsRequestBody;
}
export declare class GetCanaryRunsResponse extends SpeakeasyBase {
    contentType: string;
    getCanaryRunsResponse?: shared.GetCanaryRunsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
