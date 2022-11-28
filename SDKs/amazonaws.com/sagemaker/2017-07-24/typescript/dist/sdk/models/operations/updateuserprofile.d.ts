import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserProfileXAmzTargetEnum {
    SageMakerUpdateUserProfile = "SageMaker.UpdateUserProfile"
}
export declare class UpdateUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserProfileXAmzTargetEnum;
}
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    headers: UpdateUserProfileHeaders;
    request: shared.UpdateUserProfileRequest;
}
export declare class UpdateUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    resourceNotFound?: any;
    statusCode: number;
    updateUserProfileResponse?: shared.UpdateUserProfileResponse;
}
