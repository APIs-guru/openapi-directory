import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserProfileXAmzTargetEnum {
    SageMakerCreateUserProfile = "SageMaker.CreateUserProfile"
}
export declare class CreateUserProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserProfileXAmzTargetEnum;
}
export declare class CreateUserProfileRequest extends SpeakeasyBase {
    headers: CreateUserProfileHeaders;
    request: shared.CreateUserProfileRequest;
}
export declare class CreateUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    createUserProfileResponse?: shared.CreateUserProfileResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
