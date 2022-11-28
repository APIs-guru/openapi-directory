import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStreamXAmzTargetEnum {
    DynamoDbStreams20120810DescribeStream = "DynamoDBStreams_20120810.DescribeStream"
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
    headers: DescribeStreamHeaders;
    request: shared.DescribeStreamInput;
}
export declare class DescribeStreamResponse extends SpeakeasyBase {
    contentType: string;
    describeStreamOutput?: shared.DescribeStreamOutput;
    internalServerError?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
