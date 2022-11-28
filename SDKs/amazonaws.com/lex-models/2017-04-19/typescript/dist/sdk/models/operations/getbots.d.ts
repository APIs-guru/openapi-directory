import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
}
export declare class GetBotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotsRequest extends SpeakeasyBase {
    queryParams: GetBotsQueryParams;
    headers: GetBotsHeaders;
}
export declare class GetBotsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotsResponse?: shared.GetBotsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
