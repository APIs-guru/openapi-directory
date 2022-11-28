import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSignalingChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSignalingChannelRequestBody extends SpeakeasyBase {
    channelArn?: string;
    channelName?: string;
}
export declare class DescribeSignalingChannelRequest extends SpeakeasyBase {
    headers: DescribeSignalingChannelHeaders;
    request: DescribeSignalingChannelRequestBody;
}
export declare class DescribeSignalingChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    describeSignalingChannelOutput?: shared.DescribeSignalingChannelOutput;
    invalidArgumentException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
