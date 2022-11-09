import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeLogStreamsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeLogStreamsXAmzTargetEnum {
    Logs20140328DescribeLogStreams = "Logs_20140328.DescribeLogStreams"
}
export declare class DescribeLogStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLogStreamsXAmzTargetEnum;
}
export declare class DescribeLogStreamsRequest extends SpeakeasyBase {
    queryParams: DescribeLogStreamsQueryParams;
    headers: DescribeLogStreamsHeaders;
    request: shared.DescribeLogStreamsRequest;
}
export declare class DescribeLogStreamsResponse extends SpeakeasyBase {
    contentType: string;
    describeLogStreamsResponse?: shared.DescribeLogStreamsResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
