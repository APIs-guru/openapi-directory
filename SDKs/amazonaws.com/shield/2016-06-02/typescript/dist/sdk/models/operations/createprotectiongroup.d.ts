import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProtectionGroupXAmzTargetEnum {
    AwsShield20160616CreateProtectionGroup = "AWSShield_20160616.CreateProtectionGroup"
}
export declare class CreateProtectionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProtectionGroupXAmzTargetEnum;
}
export declare class CreateProtectionGroupRequest extends SpeakeasyBase {
    headers: CreateProtectionGroupHeaders;
    request: shared.CreateProtectionGroupRequest;
}
export declare class CreateProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    createProtectionGroupResponse?: Map<string, any>;
    internalErrorException?: any;
    invalidParameterException?: any;
    limitsExceededException?: any;
    optimisticLockException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
