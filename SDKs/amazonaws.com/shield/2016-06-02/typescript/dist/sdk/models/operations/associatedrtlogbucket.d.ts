import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateDrtLogBucketXAmzTargetEnum {
    AwsShield20160616AssociateDrtLogBucket = "AWSShield_20160616.AssociateDRTLogBucket"
}
export declare class AssociateDrtLogBucketHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDrtLogBucketXAmzTargetEnum;
}
export declare class AssociateDrtLogBucketRequest extends SpeakeasyBase {
    headers: AssociateDrtLogBucketHeaders;
    request: shared.AssociateDrtLogBucketRequest;
}
export declare class AssociateDrtLogBucketResponse extends SpeakeasyBase {
    accessDeniedForDependencyException?: any;
    associateDrtLogBucketResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    limitsExceededException?: any;
    noAssociatedRoleException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
