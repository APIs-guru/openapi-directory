import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateSubscriptionXAmzTargetEnum {
    AwsShield20160616CreateSubscription = "AWSShield_20160616.CreateSubscription"
}
export declare class CreateSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSubscriptionXAmzTargetEnum;
}
export declare class CreateSubscriptionRequest extends SpeakeasyBase {
    headers: CreateSubscriptionHeaders;
    request: Map<string, any>;
}
export declare class CreateSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    createSubscriptionResponse?: Map<string, any>;
    internalErrorException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
