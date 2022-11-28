import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDelegatedServicesForAccountQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDelegatedServicesForAccountXAmzTargetEnum {
    AwsOrganizationsV20161128ListDelegatedServicesForAccount = "AWSOrganizationsV20161128.ListDelegatedServicesForAccount"
}
export declare class ListDelegatedServicesForAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDelegatedServicesForAccountXAmzTargetEnum;
}
export declare class ListDelegatedServicesForAccountRequest extends SpeakeasyBase {
    queryParams: ListDelegatedServicesForAccountQueryParams;
    headers: ListDelegatedServicesForAccountHeaders;
    request: shared.ListDelegatedServicesForAccountRequest;
}
export declare class ListDelegatedServicesForAccountResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    accountNotFoundException?: any;
    accountNotRegisteredException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    listDelegatedServicesForAccountResponse?: shared.ListDelegatedServicesForAccountResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
