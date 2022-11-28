import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateDrtLogBucketXAmzTargetEnum {
    AwsShield20160616DisassociateDrtLogBucket = "AWSShield_20160616.DisassociateDRTLogBucket"
}
export declare class DisassociateDrtLogBucketHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDrtLogBucketXAmzTargetEnum;
}
export declare class DisassociateDrtLogBucketRequest extends SpeakeasyBase {
    headers: DisassociateDrtLogBucketHeaders;
    request: shared.DisassociateDrtLogBucketRequest;
}
export declare class DisassociateDrtLogBucketResponse extends SpeakeasyBase {
    accessDeniedForDependencyException?: any;
    contentType: string;
    disassociateDrtLogBucketResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidOperationException?: any;
    noAssociatedRoleException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
