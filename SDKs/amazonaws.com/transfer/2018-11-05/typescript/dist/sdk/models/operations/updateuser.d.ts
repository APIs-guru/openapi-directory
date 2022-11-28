import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateUserXAmzTargetEnum {
    TransferServiceUpdateUser = "TransferService.UpdateUser"
}
export declare class UpdateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserXAmzTargetEnum;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    headers: UpdateUserHeaders;
    request: shared.UpdateUserRequest;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateUserResponse?: shared.UpdateUserResponse;
}
