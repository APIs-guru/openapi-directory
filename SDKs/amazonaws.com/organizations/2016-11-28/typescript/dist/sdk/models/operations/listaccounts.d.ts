import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAccountsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListAccountsXAmzTargetEnum {
    AwsOrganizationsV20161128ListAccounts = "AWSOrganizationsV20161128.ListAccounts"
}
export declare class ListAccountsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccountsXAmzTargetEnum;
}
export declare class ListAccountsRequest extends SpeakeasyBase {
    queryParams: ListAccountsQueryParams;
    headers: ListAccountsHeaders;
    request: shared.ListAccountsRequest;
}
export declare class ListAccountsResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listAccountsResponse?: shared.ListAccountsResponse;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
