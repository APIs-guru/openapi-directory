import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateDrtRoleXAmzTargetEnum {
    AwsShield20160616AssociateDrtRole = "AWSShield_20160616.AssociateDRTRole"
}
export declare class AssociateDrtRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateDrtRoleXAmzTargetEnum;
}
export declare class AssociateDrtRoleRequest extends SpeakeasyBase {
    headers: AssociateDrtRoleHeaders;
    request: shared.AssociateDrtRoleRequest;
}
export declare class AssociateDrtRoleResponse extends SpeakeasyBase {
    accessDeniedForDependencyException?: any;
    associateDrtRoleResponse?: Map<string, any>;
    contentType: string;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
