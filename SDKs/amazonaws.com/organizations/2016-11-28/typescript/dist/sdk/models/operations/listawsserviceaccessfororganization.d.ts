import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAwsServiceAccessForOrganizationQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAwsServiceAccessForOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128ListAwsServiceAccessForOrganization = "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization"
}
export declare class ListAwsServiceAccessForOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAwsServiceAccessForOrganizationXAmzTargetEnum;
}
export declare class ListAwsServiceAccessForOrganizationRequest extends SpeakeasyBase {
    queryParams: ListAwsServiceAccessForOrganizationQueryParams;
    headers: ListAwsServiceAccessForOrganizationHeaders;
    request: shared.ListAwsServiceAccessForOrganizationRequest;
}
export declare class ListAwsServiceAccessForOrganizationResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    constraintViolationException?: any;
    contentType: string;
    invalidInputException?: any;
    listAwsServiceAccessForOrganizationResponse?: shared.ListAwsServiceAccessForOrganizationResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
