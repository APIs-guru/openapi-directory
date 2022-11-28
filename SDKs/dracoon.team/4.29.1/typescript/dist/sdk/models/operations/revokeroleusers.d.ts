import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeRoleUsersPathParams extends SpeakeasyBase {
    roleId: number;
}
export declare class RevokeRoleUsersHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RevokeRoleUsersRequest extends SpeakeasyBase {
    pathParams: RevokeRoleUsersPathParams;
    headers: RevokeRoleUsersHeaders;
    request: shared.UserIds;
}
export declare class RevokeRoleUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleUserList?: shared.RoleUserList;
    statusCode: number;
}
