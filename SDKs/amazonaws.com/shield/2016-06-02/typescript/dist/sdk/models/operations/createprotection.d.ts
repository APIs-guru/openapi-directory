import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProtectionXAmzTargetEnum {
    AwsShield20160616CreateProtection = "AWSShield_20160616.CreateProtection"
}
export declare class CreateProtectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProtectionXAmzTargetEnum;
}
export declare class CreateProtectionRequest extends SpeakeasyBase {
    headers: CreateProtectionHeaders;
    request: shared.CreateProtectionRequest;
}
export declare class CreateProtectionResponse extends SpeakeasyBase {
    contentType: string;
    createProtectionResponse?: shared.CreateProtectionResponse;
    internalErrorException?: any;
    invalidOperationException?: any;
    invalidParameterException?: any;
    invalidResourceException?: any;
    limitsExceededException?: any;
    optimisticLockException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
