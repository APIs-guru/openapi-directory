import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStreamConsumerXAmzTargetEnum {
    Kinesis20131202DescribeStreamConsumer = "Kinesis_20131202.DescribeStreamConsumer"
}
export declare class DescribeStreamConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamConsumerXAmzTargetEnum;
}
export declare class DescribeStreamConsumerRequest extends SpeakeasyBase {
    headers: DescribeStreamConsumerHeaders;
    request: shared.DescribeStreamConsumerInput;
}
export declare class DescribeStreamConsumerResponse extends SpeakeasyBase {
    contentType: string;
    describeStreamConsumerOutput?: shared.DescribeStreamConsumerOutput;
    invalidArgumentException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
