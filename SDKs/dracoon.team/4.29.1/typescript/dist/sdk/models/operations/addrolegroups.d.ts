import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddRoleGroupsPathParams extends SpeakeasyBase {
    roleId: number;
}
export declare class AddRoleGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class AddRoleGroupsRequest extends SpeakeasyBase {
    pathParams: AddRoleGroupsPathParams;
    headers: AddRoleGroupsHeaders;
    request: shared.GroupIds;
}
export declare class AddRoleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleGroupList?: shared.RoleGroupList;
    statusCode: number;
}
