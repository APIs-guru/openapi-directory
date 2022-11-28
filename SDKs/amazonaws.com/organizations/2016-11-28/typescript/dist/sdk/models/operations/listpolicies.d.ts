import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPoliciesXAmzTargetEnum {
    AwsOrganizationsV20161128ListPolicies = "AWSOrganizationsV20161128.ListPolicies"
}
export declare class ListPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPoliciesXAmzTargetEnum;
}
export declare class ListPoliciesRequest extends SpeakeasyBase {
    queryParams: ListPoliciesQueryParams;
    headers: ListPoliciesHeaders;
    request: shared.ListPoliciesRequest;
}
export declare class ListPoliciesResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listPoliciesResponse?: shared.ListPoliciesResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
