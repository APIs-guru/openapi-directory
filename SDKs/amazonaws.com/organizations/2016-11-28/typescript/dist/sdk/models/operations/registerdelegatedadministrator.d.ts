import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterDelegatedAdministratorXAmzTargetEnum {
    AwsOrganizationsV20161128RegisterDelegatedAdministrator = "AWSOrganizationsV20161128.RegisterDelegatedAdministrator"
}
export declare class RegisterDelegatedAdministratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDelegatedAdministratorXAmzTargetEnum;
}
export declare class RegisterDelegatedAdministratorRequest extends SpeakeasyBase {
    headers: RegisterDelegatedAdministratorHeaders;
    request: shared.RegisterDelegatedAdministratorRequest;
}
export declare class RegisterDelegatedAdministratorResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountAlreadyRegisteredException?: any;
    accountNotFoundException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
