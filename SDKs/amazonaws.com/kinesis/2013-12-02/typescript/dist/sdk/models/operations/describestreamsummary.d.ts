import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStreamSummaryXAmzTargetEnum {
    Kinesis20131202DescribeStreamSummary = "Kinesis_20131202.DescribeStreamSummary"
}
export declare class DescribeStreamSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamSummaryXAmzTargetEnum;
}
export declare class DescribeStreamSummaryRequest extends SpeakeasyBase {
    headers: DescribeStreamSummaryHeaders;
    request: shared.DescribeStreamSummaryInput;
}
export declare class DescribeStreamSummaryResponse extends SpeakeasyBase {
    contentType: string;
    describeStreamSummaryOutput?: shared.DescribeStreamSummaryOutput;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
