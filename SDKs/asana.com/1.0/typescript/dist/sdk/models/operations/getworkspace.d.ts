import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class GetWorkspaceQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.WorkspaceResponse;
}
export declare class GetWorkspaceRequest extends SpeakeasyBase {
    pathParams: GetWorkspacePathParams;
    queryParams: GetWorkspaceQueryParams;
}
export declare class GetWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getWorkspace200ApplicationJsonObject?: GetWorkspace200ApplicationJson;
}
