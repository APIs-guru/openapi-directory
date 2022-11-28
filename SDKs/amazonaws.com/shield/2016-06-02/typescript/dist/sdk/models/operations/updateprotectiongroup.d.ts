import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProtectionGroupXAmzTargetEnum {
    AwsShield20160616UpdateProtectionGroup = "AWSShield_20160616.UpdateProtectionGroup"
}
export declare class UpdateProtectionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProtectionGroupXAmzTargetEnum;
}
export declare class UpdateProtectionGroupRequest extends SpeakeasyBase {
    headers: UpdateProtectionGroupHeaders;
    request: shared.UpdateProtectionGroupRequest;
}
export declare class UpdateProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateProtectionGroupResponse?: Map<string, any>;
}
