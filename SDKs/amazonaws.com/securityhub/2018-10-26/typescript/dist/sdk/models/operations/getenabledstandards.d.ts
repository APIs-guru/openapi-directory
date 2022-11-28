import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnabledStandardsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetEnabledStandardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnabledStandardsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    standardsSubscriptionArns?: string[];
}
export declare class GetEnabledStandardsRequest extends SpeakeasyBase {
    queryParams: GetEnabledStandardsQueryParams;
    headers: GetEnabledStandardsHeaders;
    request: GetEnabledStandardsRequestBody;
}
export declare class GetEnabledStandardsResponse extends SpeakeasyBase {
    contentType: string;
    getEnabledStandardsResponse?: shared.GetEnabledStandardsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
