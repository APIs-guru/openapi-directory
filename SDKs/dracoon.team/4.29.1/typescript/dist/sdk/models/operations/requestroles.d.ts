import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRolesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestRolesRequest extends SpeakeasyBase {
    headers: RequestRolesHeaders;
}
export declare class RequestRolesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roleList?: shared.RoleList;
    statusCode: number;
}
