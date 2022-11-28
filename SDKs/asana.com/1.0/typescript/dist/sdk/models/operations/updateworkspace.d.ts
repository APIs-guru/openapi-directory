import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class UpdateWorkspaceQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateWorkspaceRequestBodyInput extends SpeakeasyBase {
    data?: shared.WorkspaceRequestInput;
}
export declare class UpdateWorkspace200ApplicationJson extends SpeakeasyBase {
    data?: shared.WorkspaceResponse;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    pathParams: UpdateWorkspacePathParams;
    queryParams: UpdateWorkspaceQueryParams;
    request: UpdateWorkspaceRequestBodyInput;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateWorkspace200ApplicationJsonObject?: UpdateWorkspace200ApplicationJson;
}
