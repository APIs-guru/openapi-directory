import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspaceMembershipsForUserPathParams extends SpeakeasyBase {
    userGid: string;
}
export declare class GetWorkspaceMembershipsForUserQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetWorkspaceMembershipsForUser200ApplicationJson extends SpeakeasyBase {
    data?: shared.WorkspaceMembershipCompact[];
}
export declare class GetWorkspaceMembershipsForUserRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceMembershipsForUserPathParams;
    queryParams: GetWorkspaceMembershipsForUserQueryParams;
}
export declare class GetWorkspaceMembershipsForUserResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getWorkspaceMembershipsForUser200ApplicationJsonObject?: GetWorkspaceMembershipsForUser200ApplicationJson;
}
