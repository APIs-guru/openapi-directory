import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUsersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListUsersXAmzTargetEnum {
    TransferServiceListUsers = "TransferService.ListUsers"
}
export declare class ListUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsersXAmzTargetEnum;
}
export declare class ListUsersRequest extends SpeakeasyBase {
    queryParams: ListUsersQueryParams;
    headers: ListUsersHeaders;
    request: shared.ListUsersRequest;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidRequestException?: any;
    listUsersResponse?: shared.ListUsersResponse;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
