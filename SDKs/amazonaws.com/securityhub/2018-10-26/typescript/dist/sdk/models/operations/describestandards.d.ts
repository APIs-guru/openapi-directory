import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeStandardsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeStandardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeStandardsRequest extends SpeakeasyBase {
    queryParams: DescribeStandardsQueryParams;
    headers: DescribeStandardsHeaders;
}
export declare class DescribeStandardsResponse extends SpeakeasyBase {
    contentType: string;
    describeStandardsResponse?: shared.DescribeStandardsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    statusCode: number;
}
