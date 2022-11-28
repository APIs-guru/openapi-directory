import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPoliciesForTargetQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListPoliciesForTargetXAmzTargetEnum {
    AwsOrganizationsV20161128ListPoliciesForTarget = "AWSOrganizationsV20161128.ListPoliciesForTarget"
}
export declare class ListPoliciesForTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPoliciesForTargetXAmzTargetEnum;
}
export declare class ListPoliciesForTargetRequest extends SpeakeasyBase {
    queryParams: ListPoliciesForTargetQueryParams;
    headers: ListPoliciesForTargetHeaders;
    request: shared.ListPoliciesForTargetRequest;
}
export declare class ListPoliciesForTargetResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listPoliciesForTargetResponse?: shared.ListPoliciesForTargetResponse;
    serviceException?: any;
    statusCode: number;
    targetNotFoundException?: any;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
