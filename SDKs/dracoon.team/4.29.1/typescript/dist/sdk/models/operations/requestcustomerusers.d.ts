import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestCustomerUsersPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class RequestCustomerUsersQueryParams extends SpeakeasyBase {
    filter?: string;
    includeAttributes?: boolean;
    includeManageableRooms?: boolean;
    includeRoles?: boolean;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestCustomerUsersHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class RequestCustomerUsersRequest extends SpeakeasyBase {
    pathParams: RequestCustomerUsersPathParams;
    queryParams: RequestCustomerUsersQueryParams;
    headers: RequestCustomerUsersHeaders;
}
export declare class RequestCustomerUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userList?: shared.UserList;
}
