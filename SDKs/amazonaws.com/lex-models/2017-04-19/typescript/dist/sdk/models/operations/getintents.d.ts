import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIntentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
}
export declare class GetIntentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIntentsRequest extends SpeakeasyBase {
    queryParams: GetIntentsQueryParams;
    headers: GetIntentsHeaders;
}
export declare class GetIntentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getIntentsResponse?: shared.GetIntentsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
