import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddRoleUsersPathParams extends SpeakeasyBase {
    roleId: number;
}
export declare class AddRoleUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class AddRoleUsersRequest extends SpeakeasyBase {
    pathParams: AddRoleUsersPathParams;
    headers: AddRoleUsersHeaders;
    request: shared.UserIds;
}
export declare class AddRoleUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleUserList?: shared.RoleUserList;
    statusCode: number;
}
