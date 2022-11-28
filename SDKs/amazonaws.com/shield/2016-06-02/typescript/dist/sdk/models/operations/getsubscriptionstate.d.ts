import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSubscriptionStateXAmzTargetEnum {
    AwsShield20160616GetSubscriptionState = "AWSShield_20160616.GetSubscriptionState"
}
export declare class GetSubscriptionStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSubscriptionStateXAmzTargetEnum;
}
export declare class GetSubscriptionStateRequest extends SpeakeasyBase {
    headers: GetSubscriptionStateHeaders;
    request: Map<string, any>;
}
export declare class GetSubscriptionStateResponse extends SpeakeasyBase {
    contentType: string;
    getSubscriptionStateResponse?: shared.GetSubscriptionStateResponse;
    internalErrorException?: any;
    statusCode: number;
}
