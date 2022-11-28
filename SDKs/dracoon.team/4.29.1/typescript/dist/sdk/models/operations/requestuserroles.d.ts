import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserRolesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RequestUserRolesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestUserRolesRequest extends SpeakeasyBase {
    pathParams: RequestUserRolesPathParams;
    headers: RequestUserRolesHeaders;
}
export declare class RequestUserRolesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleList?: shared.RoleList;
    statusCode: number;
}
