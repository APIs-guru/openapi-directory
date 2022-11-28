import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateSubscriptionXAmzTargetEnum {
    AwsShield20160616UpdateSubscription = "AWSShield_20160616.UpdateSubscription"
}
export declare class UpdateSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSubscriptionXAmzTargetEnum;
}
export declare class UpdateSubscriptionRequest extends SpeakeasyBase {
    headers: UpdateSubscriptionHeaders;
    request: shared.UpdateSubscriptionRequest;
}
export declare class UpdateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    lockedSubscriptionException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateSubscriptionResponse?: Map<string, any>;
}
