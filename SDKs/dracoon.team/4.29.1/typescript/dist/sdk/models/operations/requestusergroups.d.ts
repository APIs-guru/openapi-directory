import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserGroupsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RequestUserGroupsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestUserGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestUserGroupsRequest extends SpeakeasyBase {
    pathParams: RequestUserGroupsPathParams;
    queryParams: RequestUserGroupsQueryParams;
    headers: RequestUserGroupsHeaders;
}
export declare class RequestUserGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userGroupList?: shared.UserGroupList;
}
