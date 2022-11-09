import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeJobLogItemsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeJobLogItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeJobLogItemsRequestBody extends SpeakeasyBase {
    jobId: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeJobLogItemsRequest extends SpeakeasyBase {
    queryParams: DescribeJobLogItemsQueryParams;
    headers: DescribeJobLogItemsHeaders;
    request: DescribeJobLogItemsRequestBody;
}
export declare class DescribeJobLogItemsResponse extends SpeakeasyBase {
    contentType: string;
    describeJobLogItemsResponse?: shared.DescribeJobLogItemsResponse;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
