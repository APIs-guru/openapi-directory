import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRobotApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRobotApplicationRequestBody extends SpeakeasyBase {
    application: string;
    applicationVersion?: string;
}
export declare class DescribeRobotApplicationRequest extends SpeakeasyBase {
    headers: DescribeRobotApplicationHeaders;
    request: DescribeRobotApplicationRequestBody;
}
export declare class DescribeRobotApplicationResponse extends SpeakeasyBase {
    contentType: string;
    describeRobotApplicationResponse?: shared.DescribeRobotApplicationResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
