import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSecurityPoliciesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSecurityPoliciesXAmzTargetEnum {
    TransferServiceListSecurityPolicies = "TransferService.ListSecurityPolicies"
}
export declare class ListSecurityPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecurityPoliciesXAmzTargetEnum;
}
export declare class ListSecurityPoliciesRequest extends SpeakeasyBase {
    queryParams: ListSecurityPoliciesQueryParams;
    headers: ListSecurityPoliciesHeaders;
    request: shared.ListSecurityPoliciesRequest;
}
export declare class ListSecurityPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidRequestException?: any;
    listSecurityPoliciesResponse?: shared.ListSecurityPoliciesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
}
