import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateEmergencyContactSettingsXAmzTargetEnum {
    AwsShield20160616UpdateEmergencyContactSettings = "AWSShield_20160616.UpdateEmergencyContactSettings"
}
export declare class UpdateEmergencyContactSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEmergencyContactSettingsXAmzTargetEnum;
}
export declare class UpdateEmergencyContactSettingsRequest extends SpeakeasyBase {
    headers: UpdateEmergencyContactSettingsHeaders;
    request: shared.UpdateEmergencyContactSettingsRequest;
}
export declare class UpdateEmergencyContactSettingsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    optimisticLockException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateEmergencyContactSettingsResponse?: Map<string, any>;
}
