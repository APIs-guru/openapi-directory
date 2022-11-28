import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResetPasswordXAmzTargetEnum {
    WorkMailServiceResetPassword = "WorkMailService.ResetPassword"
}
export declare class ResetPasswordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetPasswordXAmzTargetEnum;
}
export declare class ResetPasswordRequest extends SpeakeasyBase {
    headers: ResetPasswordHeaders;
    request: shared.ResetPasswordRequest;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    invalidPasswordException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    resetPasswordResponse?: Map<string, any>;
    statusCode: number;
    unsupportedOperationException?: any;
}
