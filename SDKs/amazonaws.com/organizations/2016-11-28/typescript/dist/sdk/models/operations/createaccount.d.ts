import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAccountXAmzTargetEnum {
    AwsOrganizationsV20161128CreateAccount = "AWSOrganizationsV20161128.CreateAccount"
}
export declare class CreateAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAccountXAmzTargetEnum;
}
export declare class CreateAccountRequest extends SpeakeasyBase {
    headers: CreateAccountHeaders;
    request: shared.CreateAccountRequest;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    constraintViolationException?: any;
    contentType: string;
    createAccountResponse?: shared.CreateAccountResponse;
    finalizingOrganizationException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
