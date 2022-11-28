import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeStreamRequestBody extends SpeakeasyBase {
    streamArn?: string;
    streamName?: string;
}
export declare class DescribeStreamRequest extends SpeakeasyBase {
    headers: DescribeStreamHeaders;
    request: DescribeStreamRequestBody;
}
export declare class DescribeStreamResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    describeStreamOutput?: shared.DescribeStreamOutput;
    invalidArgumentException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
