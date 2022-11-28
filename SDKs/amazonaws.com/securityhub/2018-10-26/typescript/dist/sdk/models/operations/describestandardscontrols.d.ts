import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeStandardsControlsPathParams extends SpeakeasyBase {
    standardsSubscriptionArn: string;
}
export declare class DescribeStandardsControlsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class DescribeStandardsControlsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeStandardsControlsRequest extends SpeakeasyBase {
    pathParams: DescribeStandardsControlsPathParams;
    queryParams: DescribeStandardsControlsQueryParams;
    headers: DescribeStandardsControlsHeaders;
}
export declare class DescribeStandardsControlsResponse extends SpeakeasyBase {
    contentType: string;
    describeStandardsControlsResponse?: shared.DescribeStandardsControlsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
