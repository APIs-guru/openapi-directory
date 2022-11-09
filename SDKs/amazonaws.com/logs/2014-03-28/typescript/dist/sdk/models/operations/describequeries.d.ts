import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeQueriesXAmzTargetEnum {
    Logs20140328DescribeQueries = "Logs_20140328.DescribeQueries"
}
export declare class DescribeQueriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQueriesXAmzTargetEnum;
}
export declare class DescribeQueriesRequest extends SpeakeasyBase {
    headers: DescribeQueriesHeaders;
    request: shared.DescribeQueriesRequest;
}
export declare class DescribeQueriesResponse extends SpeakeasyBase {
    contentType: string;
    describeQueriesResponse?: shared.DescribeQueriesResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
