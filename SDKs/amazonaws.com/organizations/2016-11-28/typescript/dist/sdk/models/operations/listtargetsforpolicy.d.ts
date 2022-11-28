import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTargetsForPolicyQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTargetsForPolicyXAmzTargetEnum {
    AwsOrganizationsV20161128ListTargetsForPolicy = "AWSOrganizationsV20161128.ListTargetsForPolicy"
}
export declare class ListTargetsForPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTargetsForPolicyXAmzTargetEnum;
}
export declare class ListTargetsForPolicyRequest extends SpeakeasyBase {
    queryParams: ListTargetsForPolicyQueryParams;
    headers: ListTargetsForPolicyHeaders;
    request: shared.ListTargetsForPolicyRequest;
}
export declare class ListTargetsForPolicyResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listTargetsForPolicyResponse?: shared.ListTargetsForPolicyResponse;
    policyNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unsupportedApiEndpointException?: any;
}
