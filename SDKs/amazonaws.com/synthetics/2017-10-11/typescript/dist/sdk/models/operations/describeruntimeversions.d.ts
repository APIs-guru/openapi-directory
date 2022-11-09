import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeRuntimeVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class DescribeRuntimeVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRuntimeVersionsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeRuntimeVersionsRequest extends SpeakeasyBase {
    queryParams: DescribeRuntimeVersionsQueryParams;
    headers: DescribeRuntimeVersionsHeaders;
    request: DescribeRuntimeVersionsRequestBody;
}
export declare class DescribeRuntimeVersionsResponse extends SpeakeasyBase {
    contentType: string;
    describeRuntimeVersionsResponse?: shared.DescribeRuntimeVersionsResponse;
    internalServerException?: any;
    statusCode: number;
    validationException?: any;
}
