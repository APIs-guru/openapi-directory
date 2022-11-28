import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class UsersListSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class UsersListRequest extends SpeakeasyBase {
    queryParams: UsersListQueryParams;
    security: UsersListSecurity;
}
export declare class UsersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userList?: shared.UserList;
}
