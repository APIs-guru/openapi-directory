import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetUsersForWorkspaceQueryParams extends SpeakeasyBase {
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetUsersForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserCompact[];
}
export declare class GetUsersForWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetUsersForWorkspacePathParams;
    queryParams: GetUsersForWorkspaceQueryParams;
}
export declare class GetUsersForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getUsersForWorkspace200ApplicationJsonObject?: GetUsersForWorkspace200ApplicationJson;
}
