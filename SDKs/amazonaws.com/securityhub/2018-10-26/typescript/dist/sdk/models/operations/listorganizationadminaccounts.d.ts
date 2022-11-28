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
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    listOrganizationAdminAccountsResponse?: shared.ListOrganizationAdminAccountsResponse;
    statusCode: number;
}
