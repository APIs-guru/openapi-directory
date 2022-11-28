import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOrganizationAdminAccountsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListOrganizationAdminAccountsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOrganizationAdminAccountsRequest extends SpeakeasyBase {
    queryParams: ListOrganizationAdminAccountsQueryParams;
    headers: ListOrganizationAdminAccountsHeaders;
}
export declare class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    listOrganizationAdminAccountsResponse?: shared.ListOrganizationAdminAccountsResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
