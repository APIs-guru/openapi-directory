import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeRobotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRobotRequestBody extends SpeakeasyBase {
    robot: string;
}
export declare class DescribeRobotRequest extends SpeakeasyBase {
    headers: DescribeRobotHeaders;
    request: DescribeRobotRequestBody;
}
export declare class DescribeRobotResponse extends SpeakeasyBase {
    contentType: string;
    describeRobotResponse?: shared.DescribeRobotResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
