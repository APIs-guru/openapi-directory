import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RevokeRoleGroupsPathParams extends SpeakeasyBase {
    roleId: number;
}
export declare class RevokeRoleGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RevokeRoleGroupsRequest extends SpeakeasyBase {
    pathParams: RevokeRoleGroupsPathParams;
    headers: RevokeRoleGroupsHeaders;
    request: shared.GroupIds;
}
export declare class RevokeRoleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleGroupList?: shared.RoleGroupList;
    statusCode: number;
}
