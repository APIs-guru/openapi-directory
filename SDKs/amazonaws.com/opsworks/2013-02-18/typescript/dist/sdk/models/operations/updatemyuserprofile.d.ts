import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMyUserProfileXAmzTargetEnum {
    OpsWorks20130218UpdateMyUserProfile = "OpsWorks_20130218.UpdateMyUserProfile"
}
export declare class UpdateMyUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMyUserProfileXAmzTargetEnum;
}
export declare class UpdateMyUserProfileRequest extends SpeakeasyBase {
    headers: UpdateMyUserProfileHeaders;
    request: shared.UpdateMyUserProfileRequest;
}
export declare class UpdateMyUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationException?: any;
}
