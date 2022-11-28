import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class AddUserForWorkspaceQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddUserForWorkspaceRequestBody extends SpeakeasyBase {
    data?: shared.WorkspaceAddUserRequest;
}
export declare class AddUserForWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserResponse;
}
export declare class AddUserForWorkspaceRequest extends SpeakeasyBase {
    pathParams: AddUserForWorkspacePathParams;
    queryParams: AddUserForWorkspaceQueryParams;
    request: AddUserForWorkspaceRequestBody;
}
export declare class AddUserForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addUserForWorkspace200ApplicationJsonObject?: AddUserForWorkspace200ApplicationJson;
}
