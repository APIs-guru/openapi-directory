import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListUsersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListUsersXAmzTargetEnum {
    WorkMailServiceListUsers = "WorkMailService.ListUsers"
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
    invalidParameterException?: any;
    listUsersResponse?: shared.ListUsersResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
