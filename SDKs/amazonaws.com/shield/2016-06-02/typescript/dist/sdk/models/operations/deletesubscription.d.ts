import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteSubscriptionXAmzTargetEnum {
    AwsShield20160616DeleteSubscription = "AWSShield_20160616.DeleteSubscription"
}
export declare class DeleteSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSubscriptionXAmzTargetEnum;
}
export declare class DeleteSubscriptionRequest extends SpeakeasyBase {
    headers: DeleteSubscriptionHeaders;
    request: Map<string, any>;
}
export declare class DeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    deleteSubscriptionResponse?: Map<string, any>;
    internalErrorException?: any;
    lockedSubscriptionException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
