import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisassociateDrtRoleXAmzTargetEnum {
    AwsShield20160616DisassociateDrtRole = "AWSShield_20160616.DisassociateDRTRole"
}
export declare class DisassociateDrtRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDrtRoleXAmzTargetEnum;
}
export declare class DisassociateDrtRoleRequest extends SpeakeasyBase {
    headers: DisassociateDrtRoleHeaders;
    request: Map<string, any>;
}
export declare class DisassociateDrtRoleResponse extends SpeakeasyBase {
    contentType: string;
    disassociateDrtRoleResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidOperationException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
