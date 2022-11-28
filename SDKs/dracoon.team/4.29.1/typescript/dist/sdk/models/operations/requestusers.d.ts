import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUsersQueryParams extends SpeakeasyBase {
    filter?: string;
    includeAttributes?: boolean;
    includeManageableRooms?: boolean;
    includeRoles?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestUsersRequest extends SpeakeasyBase {
    queryParams: RequestUsersQueryParams;
    headers: RequestUsersHeaders;
}
export declare class RequestUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userList?: shared.UserList;
}
