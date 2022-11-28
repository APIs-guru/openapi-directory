import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeLogGroupsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeLogGroupsXAmzTargetEnum {
    Logs20140328DescribeLogGroups = "Logs_20140328.DescribeLogGroups"
}
export declare class DescribeLogGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLogGroupsXAmzTargetEnum;
}
export declare class DescribeLogGroupsRequest extends SpeakeasyBase {
    queryParams: DescribeLogGroupsQueryParams;
    headers: DescribeLogGroupsHeaders;
    request: shared.DescribeLogGroupsRequest;
}
export declare class DescribeLogGroupsResponse extends SpeakeasyBase {
    contentType: string;
    describeLogGroupsResponse?: shared.DescribeLogGroupsResponse;
    invalidParameterException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
