import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoleGroupsPathParams extends SpeakeasyBase {
    roleId: number;
}
export declare class RequestRoleGroupsQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestRoleGroupsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRoleGroupsRequest extends SpeakeasyBase {
    pathParams: RequestRoleGroupsPathParams;
    queryParams: RequestRoleGroupsQueryParams;
    headers: RequestRoleGroupsHeaders;
}
export declare class RequestRoleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleGroupList?: shared.RoleGroupList;
    statusCode: number;
}
