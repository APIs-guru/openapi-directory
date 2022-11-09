import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateUserXAmzTargetEnum {
    AmazonMemoryDbCreateUser = "AmazonMemoryDB.CreateUser"
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
    duplicateUserNameFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
    tagQuotaPerResourceExceeded?: any;
    userAlreadyExistsFault?: any;
    userQuotaExceededFault?: any;
}
