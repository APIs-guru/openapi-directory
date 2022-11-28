import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterDelegatedAdministratorXAmzTargetEnum {
    AwsOrganizationsV20161128DeregisterDelegatedAdministrator = "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator"
}
export declare class DeregisterDelegatedAdministratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterDelegatedAdministratorXAmzTargetEnum;
}
export declare class DeregisterDelegatedAdministratorRequest extends SpeakeasyBase {
    headers: DeregisterDelegatedAdministratorHeaders;
    request: shared.DeregisterDelegatedAdministratorRequest;
}
export declare class DeregisterDelegatedAdministratorResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountNotFoundException?: any;
    accountNotRegisteredException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
