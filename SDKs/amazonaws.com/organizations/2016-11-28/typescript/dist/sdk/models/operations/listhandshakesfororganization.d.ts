import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHandshakesForOrganizationQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHandshakesForOrganizationXAmzTargetEnum {
    AwsOrganizationsV20161128ListHandshakesForOrganization = "AWSOrganizationsV20161128.ListHandshakesForOrganization"
}
export declare class ListHandshakesForOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHandshakesForOrganizationXAmzTargetEnum;
}
export declare class ListHandshakesForOrganizationRequest extends SpeakeasyBase {
    queryParams: ListHandshakesForOrganizationQueryParams;
    headers: ListHandshakesForOrganizationHeaders;
    request: shared.ListHandshakesForOrganizationRequest;
}
export declare class ListHandshakesForOrganizationResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    invalidInputException?: any;
    listHandshakesForOrganizationResponse?: shared.ListHandshakesForOrganizationResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
