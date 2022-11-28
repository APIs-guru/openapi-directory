import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeStreamQueryParams extends SpeakeasyBase {
    exclusiveStartShardId?: string;
    limit?: string;
}
export declare enum DescribeStreamXAmzTargetEnum {
    Kinesis20131202DescribeStream = "Kinesis_20131202.DescribeStream"
}
export declare class DescribeStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamXAmzTargetEnum;
}
export declare class DescribeStreamRequest extends SpeakeasyBase {
    queryParams: DescribeStreamQueryParams;
    headers: DescribeStreamHeaders;
    request: shared.DescribeStreamInput;
}
export declare class DescribeStreamResponse extends SpeakeasyBase {
    contentType: string;
    describeStreamOutput?: shared.DescribeStreamOutput;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
