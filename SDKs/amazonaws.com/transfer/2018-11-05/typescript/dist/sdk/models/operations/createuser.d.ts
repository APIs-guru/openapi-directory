import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateUserXAmzTargetEnum {
    TransferServiceCreateUser = "TransferService.CreateUser"
}
export declare class CreateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserXAmzTargetEnum;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    headers: CreateUserHeaders;
    request: shared.CreateUserRequest;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    createUserResponse?: shared.CreateUserResponse;
    internalServiceError?: any;
    invalidRequestException?: any;
    resourceExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
