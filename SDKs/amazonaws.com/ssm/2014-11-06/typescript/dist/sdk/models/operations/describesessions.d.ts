import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSessionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeSessionsXAmzTargetEnum {
    AmazonSsmDescribeSessions = "AmazonSSM.DescribeSessions"
}
export declare class DescribeSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSessionsXAmzTargetEnum;
}
export declare class DescribeSessionsRequest extends SpeakeasyBase {
    queryParams: DescribeSessionsQueryParams;
    headers: DescribeSessionsHeaders;
    request: shared.DescribeSessionsRequest;
}
export declare class DescribeSessionsResponse extends SpeakeasyBase {
    contentType: string;
    describeSessionsResponse?: shared.DescribeSessionsResponse;
    internalServerError?: any;
    invalidFilterKey?: any;
    invalidNextToken?: any;
    statusCode: number;
}
