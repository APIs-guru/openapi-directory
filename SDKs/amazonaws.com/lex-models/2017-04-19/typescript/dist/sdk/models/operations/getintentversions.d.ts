import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntentVersionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetIntentVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetIntentVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntentVersionsRequest extends SpeakeasyBase {
    pathParams: GetIntentVersionsPathParams;
    queryParams: GetIntentVersionsQueryParams;
    headers: GetIntentVersionsHeaders;
}
export declare class GetIntentVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getIntentVersionsResponse?: shared.GetIntentVersionsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
