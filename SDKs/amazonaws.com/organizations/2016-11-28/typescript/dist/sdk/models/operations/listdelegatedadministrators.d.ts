import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDelegatedAdministratorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDelegatedAdministratorsXAmzTargetEnum {
    AwsOrganizationsV20161128ListDelegatedAdministrators = "AWSOrganizationsV20161128.ListDelegatedAdministrators"
}
export declare class ListDelegatedAdministratorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDelegatedAdministratorsXAmzTargetEnum;
}
export declare class ListDelegatedAdministratorsRequest extends SpeakeasyBase {
    queryParams: ListDelegatedAdministratorsQueryParams;
    headers: ListDelegatedAdministratorsHeaders;
    request: shared.ListDelegatedAdministratorsRequest;
}
export declare class ListDelegatedAdministratorsResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    listDelegatedAdministratorsResponse?: shared.ListDelegatedAdministratorsResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
