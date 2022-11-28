import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnableProactiveEngagementXAmzTargetEnum {
    AwsShield20160616EnableProactiveEngagement = "AWSShield_20160616.EnableProactiveEngagement"
}
export declare class EnableProactiveEngagementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableProactiveEngagementXAmzTargetEnum;
}
export declare class EnableProactiveEngagementRequest extends SpeakeasyBase {
    headers: EnableProactiveEngagementHeaders;
    request: Map<string, any>;
}
export declare class EnableProactiveEngagementResponse extends SpeakeasyBase {
    contentType: string;
    enableProactiveEngagementResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
