import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeHandshakeXAmzTargetEnum {
    AwsOrganizationsV20161128DescribeHandshake = "AWSOrganizationsV20161128.DescribeHandshake"
}
export declare class DescribeHandshakeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHandshakeXAmzTargetEnum;
}
export declare class DescribeHandshakeRequest extends SpeakeasyBase {
    headers: DescribeHandshakeHeaders;
    request: shared.DescribeHandshakeRequest;
}
export declare class DescribeHandshakeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    describeHandshakeResponse?: shared.DescribeHandshakeResponse;
    handshakeNotFoundException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
