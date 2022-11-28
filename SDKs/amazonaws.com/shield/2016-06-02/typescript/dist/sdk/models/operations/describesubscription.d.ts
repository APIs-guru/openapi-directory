import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeSubscriptionXAmzTargetEnum {
    AwsShield20160616DescribeSubscription = "AWSShield_20160616.DescribeSubscription"
}
export declare class DescribeSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscriptionXAmzTargetEnum;
}
export declare class DescribeSubscriptionRequest extends SpeakeasyBase {
    headers: DescribeSubscriptionHeaders;
    request: Map<string, any>;
}
export declare class DescribeSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    describeSubscriptionResponse?: shared.DescribeSubscriptionResponse;
    internalErrorException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
