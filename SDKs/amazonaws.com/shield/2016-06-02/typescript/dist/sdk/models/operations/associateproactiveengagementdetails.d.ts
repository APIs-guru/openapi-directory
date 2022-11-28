import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateProactiveEngagementDetailsXAmzTargetEnum {
    AwsShield20160616AssociateProactiveEngagementDetails = "AWSShield_20160616.AssociateProactiveEngagementDetails"
}
export declare class AssociateProactiveEngagementDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateProactiveEngagementDetailsXAmzTargetEnum;
}
export declare class AssociateProactiveEngagementDetailsRequest extends SpeakeasyBase {
    headers: AssociateProactiveEngagementDetailsHeaders;
    request: shared.AssociateProactiveEngagementDetailsRequest;
}
export declare class AssociateProactiveEngagementDetailsResponse extends SpeakeasyBase {
    associateProactiveEngagementDetailsResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
