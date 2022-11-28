import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisableProactiveEngagementXAmzTargetEnum {
    AwsShield20160616DisableProactiveEngagement = "AWSShield_20160616.DisableProactiveEngagement"
}
export declare class DisableProactiveEngagementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableProactiveEngagementXAmzTargetEnum;
}
export declare class DisableProactiveEngagementRequest extends SpeakeasyBase {
    headers: DisableProactiveEngagementHeaders;
    request: Map<string, any>;
}
export declare class DisableProactiveEngagementResponse extends SpeakeasyBase {
    contentType: string;
    disableProactiveEngagementResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
