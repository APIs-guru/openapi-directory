import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserProfileXAmzTargetEnum {
    OpsWorks20130218DeleteUserProfile = "OpsWorks_20130218.DeleteUserProfile"
}
export declare class DeleteUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserProfileXAmzTargetEnum;
}
export declare class DeleteUserProfileRequest extends SpeakeasyBase {
    headers: DeleteUserProfileHeaders;
    request: shared.DeleteUserProfileRequest;
}
export declare class DeleteUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
