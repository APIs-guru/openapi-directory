import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteUserXAmzTargetEnum {
    WorkMailServiceDeleteUser = "WorkMailService.DeleteUser"
}
export declare class DeleteUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserXAmzTargetEnum;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    headers: DeleteUserHeaders;
    request: shared.DeleteUserRequest;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    deleteUserResponse?: Map<string, any>;
    directoryServiceAuthenticationFailedException?: any;
    directoryUnavailableException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
