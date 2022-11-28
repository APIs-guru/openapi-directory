import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProtectionGroupXAmzTargetEnum {
    AwsShield20160616DescribeProtectionGroup = "AWSShield_20160616.DescribeProtectionGroup"
}
export declare class DescribeProtectionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProtectionGroupXAmzTargetEnum;
}
export declare class DescribeProtectionGroupRequest extends SpeakeasyBase {
    headers: DescribeProtectionGroupHeaders;
    request: shared.DescribeProtectionGroupRequest;
}
export declare class DescribeProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeProtectionGroupResponse?: shared.DescribeProtectionGroupResponse;
    internalErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
