import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateUserXAmzTargetEnum {
    AmazonMemoryDbUpdateUser = "AmazonMemoryDB.UpdateUser"
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
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    invalidUserStateFault?: any;
    statusCode: number;
    updateUserResponse?: shared.UpdateUserResponse;
    userNotFoundFault?: any;
}
