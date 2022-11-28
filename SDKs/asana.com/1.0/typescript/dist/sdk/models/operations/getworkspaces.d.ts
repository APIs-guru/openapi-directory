import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetWorkspaces200ApplicationJson extends SpeakeasyBase {
    data?: shared.WorkspaceCompact[];
}
export declare class GetWorkspacesRequest extends SpeakeasyBase {
    queryParams: GetWorkspacesQueryParams;
}
export declare class GetWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getWorkspaces200ApplicationJsonObject?: GetWorkspaces200ApplicationJson;
}
