import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoleUsersPathParams extends SpeakeasyBase {
    roleId: number;
}
export declare class RequestRoleUsersQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestRoleUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRoleUsersRequest extends SpeakeasyBase {
    pathParams: RequestRoleUsersPathParams;
    queryParams: RequestRoleUsersQueryParams;
    headers: RequestRoleUsersHeaders;
}
export declare class RequestRoleUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleUserList?: shared.RoleUserList;
    statusCode: number;
}
