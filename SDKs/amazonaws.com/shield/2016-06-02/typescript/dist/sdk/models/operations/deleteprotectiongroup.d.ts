import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProtectionGroupXAmzTargetEnum {
    AwsShield20160616DeleteProtectionGroup = "AWSShield_20160616.DeleteProtectionGroup"
}
export declare class DeleteProtectionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProtectionGroupXAmzTargetEnum;
}
export declare class DeleteProtectionGroupRequest extends SpeakeasyBase {
    headers: DeleteProtectionGroupHeaders;
    request: shared.DeleteProtectionGroupRequest;
}
export declare class DeleteProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteProtectionGroupResponse?: Map<string, any>;
    internalErrorException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
