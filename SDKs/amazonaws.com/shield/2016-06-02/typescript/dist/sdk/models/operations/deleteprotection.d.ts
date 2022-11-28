import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteProtectionXAmzTargetEnum {
    AwsShield20160616DeleteProtection = "AWSShield_20160616.DeleteProtection"
}
export declare class DeleteProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProtectionXAmzTargetEnum;
}
export declare class DeleteProtectionRequest extends SpeakeasyBase {
    headers: DeleteProtectionHeaders;
    request: shared.DeleteProtectionRequest;
}
export declare class DeleteProtectionResponse extends SpeakeasyBase {
    contentType: string;
    deleteProtectionResponse?: Map<string, any>;
    internalErrorException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
