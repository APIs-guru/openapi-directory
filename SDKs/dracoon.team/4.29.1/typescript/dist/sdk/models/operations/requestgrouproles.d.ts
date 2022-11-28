import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestGroupRolesPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class RequestGroupRolesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestGroupRolesRequest extends SpeakeasyBase {
    pathParams: RequestGroupRolesPathParams;
    headers: RequestGroupRolesHeaders;
}
export declare class RequestGroupRolesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleList?: shared.RoleList;
    statusCode: number;
}
