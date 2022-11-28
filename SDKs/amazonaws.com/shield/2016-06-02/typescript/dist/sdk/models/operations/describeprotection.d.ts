import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProtectionXAmzTargetEnum {
    AwsShield20160616DescribeProtection = "AWSShield_20160616.DescribeProtection"
}
export declare class DescribeProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProtectionXAmzTargetEnum;
}
export declare class DescribeProtectionRequest extends SpeakeasyBase {
    headers: DescribeProtectionHeaders;
    request: shared.DescribeProtectionRequest;
}
export declare class DescribeProtectionResponse extends SpeakeasyBase {
    contentType: string;
    describeProtectionResponse?: shared.DescribeProtectionResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
